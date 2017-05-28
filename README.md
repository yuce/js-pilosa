# Javascript/Typescript Client for Pilosa

<a href="https://github.com/pilosa"><img src="https://img.shields.io/badge/pilosa-v0.3.2-blue.svg"></a>
<a href="https://www.npmjs.com/package/pilosa"><img src="https://img.shields.io/npm/v/pilosa.svg"></a>

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Cute_Sloth.jpg/320px-Cute_Sloth.jpg" style="float: right" align="right" height="180">

Javascript/Typescript client for Pilosa high performance distributed bitmap index.

## Change Log

* **v0.3.2**:
    * Initial version.
    * Supports Pilosa Server v0.3.2.

## Requirements

* NodeJS 4 or later
* (Optional) Typescript 2.3 and higher

## Install

Pilosa client is available as an [npm](https://www.npmjs.com/package/pilosa) package. You can install the library using:

```
npm install --save pilosa
```

## Usage

### Quick overview (Javascript/Typescript using promises)

Assuming [Pilosa](https://github.com/pilosa/pilosa) server is running at `localhost:10101` (the default):

```javascript
var pilosa = require("pilosa");

// Create the default client
var client = new pilosa.Client();

// Create an Index object
var myindex = new pilosa.Index("myindex");

// Create a Frame object
var myframe = myindex.frame("myframe");

// Make sure the index exists on the server
client.ensureIndex(myindex).then(() =>

// Make sure the frame exists on the server
client.ensureFrame(myframe)).then(() =>

// Send a SetBit query
client.query(myframe.setBit(5, 42))).then(_ => {
    // Send a Bitmap query
    client.query(myframe.bitmap(5)).then(response => {
        if (response.result) {
            var bits = response.result.bitmap.bits;
            console.log("Got bits: ", bits);
        }
    }).catch(err => console.log("ERROR: ", err));

    // You can batch queries to improve throughput
    client.query(
        myindex.batchQuery(
            myframe.bitmap(5),
            myframe.bitmap(19)
        )
    ).then(response => {
        response.results.forEach(result => {
            console.log("Got bits: ", result.bitmap.bits);
        });
    }).catch(err => console.log("ERROR: ", err));
}).catch(err => console.log("ERROR: ", err));

```

### Quick overview (Typescript using async/await)

```typescript
import * as pilosa from "pilosa";

async function main() {
    // Create the default client
    var client = new pilosa.Client();

    // Create an Index object
    var myindex = new pilosa.Index("myindex");

    // Create a Frame object
    var myframe = myindex.frame("myframe");

    // Make sure the index exists on the server
    await client.ensureIndex(myindex);

    // Make sure the frame exists on the server
    await client.ensureFrame(myframe);

    // Send a SetBit query
    await client.query(myframe.setBit(5, 42));

    // Send a Bitmap query
    var response = await client.query(myframe.bitmap(5));
    if (response.result) {
        var bits = response.result.bitmap.bits;
        console.log("Got bits: ", bits);
    }

    // You can batch queries to improve throughput
    response = await client.query(
        myindex.batchQuery(
            myframe.bitmap(5),
            myframe.bitmap(19)));

    response.results.forEach(result => {
        console.log("Got bits: ", result.bitmap.bits);
    });
}

main().catch(err => console.log("ERROR: ", err));
```

### Data Model and Queries

#### Indexes and Frames

*Index* and *frame*s are the main data models of Pilosa. You can check the [Pilosa documentation](https://www.pilosa.com/docs) for more detail about the data model.

`Index` constructor is used to create an index object. Note that this does not create an index on the server; the index object simply defines the schema.

```javascript
var repository = new pilosa.Index("repository")
```

Indexes support changing the column label and time quantum. `IndexOptions` objects store that kind of data. In order to apply these custom options, pass an `IndexOptions` object as the second argument to `Index`:

```javascript
var options = {
    columnLabel: "repo_id",
    timeQuantum: pilosa.TimeQuantum.YEAR_MONTH
}
var repository = pilosa.Index("repository", options);
```

Frames are created with a call to `index.frame` method:

```javascript
var stargazer = repository.frame("stargazer");
```

Similar to index objects, you can pass custom options to the `index.frame` method:

```javascript
var options = {
    rowLabel: "stargazer_id",
    timeQuantum: pilosa.TimeQuantum.YEAR_MONTH_DAY
}
var stargazer = repository.frame("stargazer", options);
```

#### Queries

Once you have indexes and frame objects created, you can create queries for them. Some of the queries work on the columns; corresponding methods are attached to the index. Other queries work on rows, with related methods attached to frames.

For instance, `Bitmap` queries work on rows; use a frame object to create those queries:

```javascript
var bitmapQuery = stargazer.bitmap(1, 100);  // corresponds to PQL: Bitmap(frame='stargazer', stargazer_id=1)
```

`Union` queries work on columns; use the index object to create them:

```javascript
var query = repository.union(bitmapQuery1, bitmapQuery2);
```

In order to increase througput, you may want to batch queries sent to the Pilosa server. The `index.batchQuery` method is used for that purpose:

```javascript
var query = repository.batchQuery(
    stargazer.bitmap(1, 100),
    repository.union(stargazer.bitmap(100, 200), stargazer.bitmap(5, 100))
);
```

The recommended way of creating query objects is, using dedicated methods attached to index and frame objects. But sometimes it would be desirable to send raw queries to Pilosa. You can use the `index.rawQuery` method for that. Note that, query string is not validated before sending to the server:

```javascript
var query = repository.rawQuery("Bitmap(frame='stargazer', stargazer_id=5)");
```

Check [Pilosa documentation](https://www.pilosa.com/docs) for PQL details. Here is a list of methods corresponding to PQL calls:

Index:

* `union(...bitmaps: Array<PqlBitmapQuery>): PqlBitmapQuery`
* `intersect(...bitmaps: Array<PqlBitmapQuery>): PqlBitmapQuery`
* `difference(...bitmaps: Array<PqlBitmapQuery>): PqlBitmapQuery`
* `count(bitmap: PqlBitmapQuery): PqlQuery`
* `setColumnAttrs(columnID: number, attrs: AttributeMap): PqlBitmapQuery`

Frame:

* `bitmap(rowID: number): PqlBitmapQuery`
* `setBit(rowID: number, columnID: number, timestamp?: Date): PqlQuery`
* `inverseBitmap(columnID: number): PqlQuery`
* `clearBit(rowID: number, columnID: number): PqlQuery`
* `topN(n: number, bitmap?: PqlBitmapQuery, field?: string, ...values: Array<any>): PqlBitmapQuery`
* `range(rowID: number, start: Date, end: Date): PqlBitmapQuery`
* `setRowAttrs(rowID: number, attrs: AttributeMap): PqlBitmapQuery`

### Pilosa URI

A Pilosa URI has the `${SCHEME}://${HOST}:${PORT}` format:
* **Scheme**: Protocol of the URI. Default: `http`.
* **Host**: Hostname or ipv4/ipv6 IP address. Default: localhost.
* **Port**: Port number. Default: `10101`.

All parts of the URI are optional, but at least one of them must be specified. The following are equivalent:

* `http://localhost:10101`
* `http://localhost`
* `http://:10101`
* `localhost:10101`
* `localhost`
* `:10101`

A Pilosa URI is represented by the `pilosa.URI` class. Below are a few ways to create `URI` objects:

```javascript
// create the default URI: http://localhost:10101
var uri1 = new pilosa.URI()

// create a URI from string address
var uri2 = pilosa.URI.address("db1.pilosa.com:20202")

// create a URI with the given host and port
var URI uri3 = new pilosa.URI(host="db1.pilosa.com", port=20202);
``` 

### Pilosa Client

In order to interact with a Pilosa server, an instance of `pilosa.Client` should be created. We recommend creating a single instance of the client and share it with other objects when necessary.

If the Pilosa server is running at the default address (`http://localhost:10101`) you can create the default client with default options using:

```javascript
var client = new pilosa.Client()
```

To use a a custom server address, pass the address in the first argument:

```javascript
var client = new pilosa.Client("http://db1.pilosa.com:15000")
```

If you are running a cluster of Pilosa servers, you can create a `pilosa.Cluster` object that keeps addresses of those servers:

```javascript
var cluster = new pilosa.Cluster(
    pilosa.URI.address(":10101"),
    pilosa.URI.address(":10110"),
    pilosa.URI.address(":10111"),
);

// Create a client with the cluster
var client = new pilosa.Client(cluster)
```

Once you create a client, you can create indexes, frames and start sending queries. All client methods return a `Promise` object.

Here is how you would create an index and frame:

```javascript
// materialize repository index instance initialized before
client.createIndex(repository).then(() =>
// materialize stargazer frame instance initialized before
client.create_frame(stargazer).then(() => {
    // actions on the frame.
})).catch(err => {
    // act on the error
});
```

Using async/await syntax is obviously preferable in case you are using Javascript with NodeJS 7 and higher or Typescript:

```javascript
try {
    // materialize repository index instance initialized before
    await client.createIndex(repository);
    // materialize stargazer frame instance initialized before
    await client.create_frame(stargazer);

    // actions on the frame...
}
catch (e)  {
    // act on the error
}
```

If the index or frame exists on the server, you will receive a `PilosaError`. You can use `ensureIndex` and `ensureFrame` methods to ignore existing indexes and frames.

You can send queries to a Pilosa server using the `query` method of client objects.

Using promises:

```javascript
client.query(frame.bitmap(5)).then(response => {
    // act on the response
})
```

Using async/await:
```javascript
var response = await client.query(frame.bitmap(5));
// act on the response
```

`query` method accepts an optional argument of type `QueryOptions`:

```javascript
var queryOptions = {
    columns: true  // return column data in the response
}
client.query(frame.bitmap(5), queryOptions).then(response => {
    // act on the response
});
```

### Server Response

When a query is sent to a Pilosa server, the server either fulfills the query or sends an error message. In the case of an error, `PilosaError` is returned, otherwise a `QueryResponse` object is returned.

A `QueryResponse` object may contain zero or more results of `QueryResult` type. You can access all results using the `results` property of `QueryResponse` (which returns a list of `QueryResult` objects) or you can use the `result` property (which returns either the first result or `null` if there are no results):

```javascript
client.query(frame.bitmap(5)).then(response => {
    // check that there's a result and act on it
    var result = response.result
    if result {
        // act on the result
    }

    // iterate on all results
    response.results.forEach(result => {
        // act on the result
    });
}).catch(err => {
    // act on the error
});
```

Similarly, a `QueryResponse` object may include a number of column objects, if `columns=true` query option was used:

```javascript
// check that there's a column object and act on it
var column = response.column
if column {
    // act on the column
}
    
// iterate on all columns
response.columns.forEach(column => {
    // act on the column
})
```

`QueryResult` objects contain:

* `bitmap` property to retrieve a bitmap result,
* `countItems` property to retrieve column count per row ID entries returned from `topN` queries,
* `count` property to retrieve the number of rows per the given row ID returned from `count` queries.

```javascript
var bitmap = response.bitmap
var bits = bitmap.bits
var attributes = bitmap.attributes

var countItems = response.countItems

var count = response.count
```

## Contribution

1. Fork this repo and add it as upstream: `git remote add upstream git@github.com:yuce/js-pilosa.git`.
2. Make sure all tests pass (use `make test-all`) and be sure that the tests cover all statements in your code (we aim for 100% test coverage).
3. Commit your code to a feature branch and send a pull request to the `master` branch of our repo.

The sections below assume your platform has `make`. Otherwise you can view the corresponding steps of the `Makefile`.

### Running tests

You can run unit tests with:
```
make test
```

And both unit and integration tests with:
```
make test-all
```

### Generating protobuf classes

Protobuf classes are already checked in to source control, so this step is only needed when the upstream `public.proto` changes.

Before running the following step, make sure you have the [Protobuf compiler](https://github.com/google/protobuf) installed:

```
make generate
```

## License

```
Copyright 2017 Yuce Tekol

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions
are met:

1. Redistributions of source code must retain the above copyright
notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright
notice, this list of conditions and the following disclaimer in the
documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
contributors may be used to endorse or promote products derived
from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND
CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
DAMAGE.
```
