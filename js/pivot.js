let url='http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20220319';
fetch(url)
.then(response => response.json())
.then(response =>{
    // const obj=response.boxOfficeResult.weeklyBoxOfficeList;
    // console.log(obj);
    // const key = Object.keys(obj[0]);
    // const jsonKey = JSON.stringify(key);
    // console.log(JSON.stringify(key));
    // const result = Object.entries(jsonKey);
    // console.log(result);
    
    
});
// const value = [
//         ["roadTy","vhcty","location","mttr_cl_cd"],
//         ["황규복","도로","구미","1025558"],
//         ["황규복","도로","구미","1025558"],
//         ["황규복","도로","구미","1025558"],
//         ["황규복","도로","구미","1025558"],
//         ["황규복","도로","구미","1025558"],
//         ["황규복","도로","구미","1025558"],
//         ["황규복","도로","구미","1025558"],
//         ["황규복","도로","구미","1025558"],
//         ["황규복","도로","구미","1025558"]
//     ];
//     $.pivotUtilities.tipsData = value;



$.pivotUtilities.tipsData = [
    ["도로유형","위험물질","차종","광역지자체","건수","대수"],
    ["107","고압가스","일반형-카고","서울특별시","5","3"],
    ["-","위험물","일반형-카고","서울특별시","7","3"],
    ["-","위험물","일반형-카고","서울특별시","5","3"],
    ["-","고압가스","일반형-카고","서울특별시","5","3"],
    ["-","미식별","일반형-카고","서울특별시","5","3"],
    ["107","고압가스","일반형-카고","경상북도","5","3"],
    ["101","유해화학물질","특수용도형-탱크로리","경상북도","3","1"],
    ["101","유해화학물질","밴","경상북도","6","4"],
    ];