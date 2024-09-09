$(function(){
    function initlist(){
        $.ajax({
            type:"get",
            url:'/users/employee',
            dataType:'json',
            success:function(){
                $.ajax({
                    type:"get",
                    url:'/users/getemployee',
                    dataType:'json',
                    success:function(data){
                        console.log(data)
                    if (data==''){
                        alert('职员信息为空')
                    }

                    var htmlstr=template('templist',res)
                    $('#tbody').html(htmlstr)
                    }


                })
                
            }
        })
    }
})