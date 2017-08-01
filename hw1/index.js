// 請 jQuery 抓 button 元件，並且設定當 click 事件發生後，要執行的程式碼
$('button').on('click', function() {

    var r = $('#raw').val()

    var d = $('#dry').val()

    r = Number(r)

    d = Number(d)

    rd = (r - d) * 100

    β = rd / d

    α = rd / r

    $('#result1').val(β)
    $('#result2').val(α)
})