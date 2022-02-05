function test() {
    if( 1 + 1 !== 2) {
        fail();
    }
}

function fail() {
    console.error('Test error');
    process.exit(1);//stops the following build process
}

test();