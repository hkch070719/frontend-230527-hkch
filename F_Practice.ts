type APIResponseState = "loading" | "success" | "error";

function handleResponse(string:APIResponseStat ) {
    switch(string) {
        console.log('loading');
        break;
    case 'success':
        console.log('success');
        break;
    case 'error':
        console.log('error');
        break;
    }
}
handleResponse('loading');
handleResponse('success');
handleResponse('error');0