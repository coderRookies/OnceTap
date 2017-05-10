function openLifeDetail(title,type){
    api.openWin({
        name: 'life-list',
        url: 'mp.weixin.qq.com/s/xaIkuplp3RlwK2QSfgmi7g',
        opaque: true,
        vScrollBarEnabled: false,
        pageParam:{title:title,type:type}
    });
}
