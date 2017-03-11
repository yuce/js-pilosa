
export class QueryResult {
    
}

export class QueryResponse {
    get results(): QueryResult[] {
        return new Array<QueryResult>(0);
    }
}

