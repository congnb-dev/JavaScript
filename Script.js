    function tinhTien(){
        var tienVay = document.getElementById("money").value;
            soThang = document.getElementById("month").value ;
            laiSuat = document.getElementById("interest").value;
            ngayGiaiNgan = document.getElementById("date").value;

        //tiền gốc không đổi
        tienGoc = tienVay/soThang ;
        for (let i = 1; i <=soThang; i++) {
            tienLai = tienVay*(laiSuat/12/100);
            tienPhaiTra = tienGoc+tienLai;
            gocCon = tienVay - tienGoc;
            document.writeln("tháng thứ "+i)
            document.writeln("tiền gốc phải trả: " +(Math.round(tienGoc* 1000)/1000));
            document.writeln("tiền lãi phải trả: " +(Math.round(tienLai*1000)/1000));
            document.writeln("tiền phải trả hằng tháng: " +(Math.round((tienPhaiTra)* 1000)/1000));
            document.writeln("tiền gốc còn lại: "  +Math.round((gocCon)* 1000)/1000);
            
            tienVay -= tienGoc;
        }
    
    }
    
 
    