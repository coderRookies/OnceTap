apiready = function(){
    var header = $api.byId('header');
    if(header){
        $api.fixStatusBar(header);
    }
    var pos = $api.offset(header);
    api.openFrame({
        name: 'tel-con',
        url: 'http://mp.weixin.qq.com/s/lS9BJGE-gRYAsEJ65dV9IQ',
        rect:{
            x: 0,
            y: pos.h,
            w: 'auto',
            h: 'auto'
        },
        bounces: true,
        vScrollBarEnabled: false
    });
};