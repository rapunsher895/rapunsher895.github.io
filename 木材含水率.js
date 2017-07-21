// 請 jQuery 抓 button 元件，並且設定當 click 事件發生後，要執行的程式碼
$('button').on('click', function() {
    // 取得體重的input
    var r = $('#raw').val()
        // 取得身體的input
    var d = $('#dry').val()
        // 將取得的體重轉成數字
    r = Number(r)
        // 將取得的身高轉成數字並且轉換成公尺單位
    d = Number(d)
        // 計算 h 的平方
    rd = (r - d) * 100
        // 計算 bmi
    β = rd / d
        // 將計算結束顯示在 id=result 的元件上
    α = rd / r

    $('#result1').val(β)
    $('#result2').val(α)
})