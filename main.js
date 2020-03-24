$(function(){
    var dataObject = [
        {
            Name: 'Java',
            Rank: 1,
            Change: '降',
            Range: -0.0001
        },
        {
            Name: 'C',
            Rank: 2,
            Change: '升',
            Range: 0.0244
        },
        {
            Name: 'Python',
            Rank: 3,
            Change: '升',
            Range: 0.0141
        },
        {
            Name: 'C++',
            Rank: 4,
            Change: '降',
            Range: -0.0258
        },
        {
            Name: 'C#',
            Rank: 5,
            Change: '升',
            Range: 0.0207
        },
        {
            Name: 'Visual Basic .NET',
            Rank: 6,
            Change: '降',
            Range: -0.0117
        },
        {
            Name: 'JavaScript',
            Rank: 7,
            Change: '降',
            Range: -0.0085
        }
    ];
    var mainElement = document.getElementById('main');
    var mainSettings = {
        data: dataObject,
        licenseKey: 'non-commercial-and-evaluation',
        columns: [
            {
                data: 'Name',
                type: 'text',
            },
            {
                data: 'Rank',
                type: 'text'
            },
            {
                data: 'Change',
                type: 'text'
            },
            {
                data: 'Range',
                type: 'numeric',
                numericFormat: {
                    pattern: '+0.00%'
                }
            }
        ],
        stretchH: 'all',
        width: 600,
        autoWrapRow: true,
        manualRowResize: true,
        manualColumnResize: true,
        rowHeaders: false,//隐藏行号
        colWidths: 150,
        rowHeights: 35,
        colHeaders: [
            '语言名称',
            '排名',
            '升或降',
            '变化幅度'
        ],
        manualRowMove: true,
        manualColumnMove: true,
        contextMenu: true,
        filters: true,
        dropdownMenu: false,
        className: 'htCenter htMiddle',//水平垂直居中
    }; 
    var main = new Handsontable(mainElement, mainSettings);

    //折线
    var myChart = echarts.init(document.getElementById('chart'));
    var option = {
        title: {
            text: 'JavaScript语言排名变化'
        },
        width: 500,
        height: 180,
        tooltip: {
            trigger: 'axis',
            formatter:'&nbsp;&nbsp;{a}<br/>{b0}: {c0}'
        },
        xAxis: {
            data: [2000,2005,2010,2015,2020]  
        },
        yAxis: {},
        series: [{
            name: '排名',
            type: 'line',
            smooth: false,
            data: [6,9,8,8,7]
        }]
    };
    myChart.setOption(option);
})