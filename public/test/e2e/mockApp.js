var myAppDev = angular.module('demoApp-e2e', ['demoApp', 'ngMockE2E']);

myAppDev.run(["$httpBackend", function ($httpBackend) {
    $httpBackend.whenGET('/assets/config').respond(givenEncodedWithFieldNames(), {'content-type': 'application/json;charset=utf-8'});
    $httpBackend.whenGET('/assets/config').respond(givenEncodedWithFieldNames(), {'content-type': 'application/json;charset=utf-8'});
    $httpBackend.whenGET('/assets/config?name_enc=XJWoMnnOlSF3tFoU4jn4gg%3D%3D').respond(givenEncodedWithFieldNames(), {'content-type': 'application/json;charset=utf-8'});
    $httpBackend.whenGET('/assets/config?query=WZM2hwPXWx4%2B7SbaJpUPrh6KZl7c4lqZ%2F67En5tJy8DGTjW%2BmxDV0g8t2UtDklW4f1Ec%2Fmr6hPf2K6V%2BoE%2F21A%3D%3D').respond(givenEncodedWithFieldNames(), {'Content-Type': 'application/json;charset=utf-8'});
    $httpBackend.whenPOST('/assets/config', '7fF8WOaj2HNvqhnOgvCNWFlxbNFX3N2Fi13ueR/Fe5kT5/pZGp1oVUw+ZYIgv7ST/Ke4+F5/8JXQI87/mpHVlNF6UrYEHrqAnj0gewtcwQ20lf+Kc4aSaXwJN8XJuNYy').respond({body:'7fF8WOaj2HNvqhnOgvCNWFlxbNFX3N2Fi13ueR/Fe5kT5/pZGp1oVUw+ZYIgv7ST/Ke4+F5/8JXQI87/mpHVlNF6UrYEHrqAnj0gewtcwQ20lf+Kc4aSaXwJN8XJuNYy'}, {'content-type': 'application/json;charset=utf-8'});
    $httpBackend.whenPOST('/assets/config', givenProfile()).respond(200);
    $httpBackend.whenPOST('/assets/empty').respond(null, {'content-type': 'application/json;charset=utf-8'});
    $httpBackend.whenGET(/partials\/.*/).passThrough();
}]);

//given
function givenProfile() {
    return {    items: [
        {name_enc: "XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"}
    ],
        count: 1
    }

}

function givenEncodedWithFieldNames() {
    return {    items: [
        {name_enc: "XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"},
        {name_enc: "XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"},
        {name_enc: "XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg=="}
    ],
        count: 3
    }
}
