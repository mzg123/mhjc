var assist={
    alertSureMap:{
        "/modals":"modalsSure"

    }
    ,getSureClickByPath:function(url){
        return this.alertSureMap[url];
    }
}
module.exports=assist;