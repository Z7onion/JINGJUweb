var myChart = echarts.init(document.getElementById('center1'), 'dark');
var option = {
  title: {
    text: ''
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['真实艺术团体个数', '艺术团体个数预测值', '真实观众人次', '观众人次预测值 ']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [1990
,1991
,1992
,1993
,1994
,1995
,1996
,1997
,1998
,1999
,2000
,2001
,2002
,2003
,2004
,2005
,2006
,2007
,2008
,2009
,2010
,2011
,2012
,2013
,2014
,2015
,2016
,2017
,2018
,2019
,2020,
2021,2022,2023,2024,2025],
 axisLabel: {  
					interval:0,
                    rotate:-90  //倾斜的程度
                }
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '真实艺术团体个数',
      type: 'line',
      stack: 'Total',
      data: [2788
,2760
,2744
,2698
,2691
,2676
,2656
,2651
,2640
,2622
,2619
,2590
,2577
,2601
,2512
,2472
,2456
,2455
,2465
,2481
,2421
,2249
,1804
,1588
,1581
,1548
,1520
,1530
,1527
,1499
,1418]
    },
    {
      name: '真实观众人次',
      type: 'line',
      stack: 'Total',
      data: [51012
,46411
,46338
,42530
,40935
,43166
,47934
,46361
,53486
,46904
,46168
,47385
,45980
,39163
,37907
,35752
,40766
,45404
,41272
,43127
,44290
,38209
,29796
,26067
,24294
,24261
,24004
,25619
,23306
,22353
,13061]
    },
    {
      name: '艺术团体个数预测值',
      type: 'line',
      stack: 'Total',
      data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1489.12582266,
 1531.06376159,
 1544.57050401,
 1562.01738495,
 1575.62926251,]
    },
    {
      name: '观众人次预测值 ',
      type: 'line',
      stack: 'Total',
      data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 14420.6291244 ,
 13013.9391408 ,
 21100.66203183,
 19075.15152252,
 22313.99156904]
    },
   
  ]
};
myChart.setOption(option);