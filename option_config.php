<?php
/**
 * 逛逛附近
 * http://appmarket.pixnet.tw/#/addon/262
 *
 * @copyright Copyright 2003-2014 PIXNET Digital Media Corporation 優像數位媒體科技股份有限公司
 * @license http://framework.pixnet.net/license BSD License
 * @author Repeat Yang <repeat _at_ pixnet _dot_ tw>
 */
for ($i = 0; $i <= 40; $i++) {
    if ($i <= 1) {
        $elements[$i * 500] = ['desc' => ['zh_TW' => $i * 500 . ' 公尺']];
    } else {
        // 5 公里以上每公里一個選項
        if ((10 < $i) && (1 == $i % 2)) {
            continue;
        }

        $elements[$i * 500] = ['desc' => ['zh_TW' => $i * 0.5 . ' 公里']];
    }
}
$options = [
    [
        'name' => 'min',
        'desc' => [
            'zh_TW' => "距離範圍最小值",
        ],
        'type' => 'select',
        'elements' => $elements,
        'default' => 0
    ],
    [
        'name' => 'max',
        'desc' => [
            'zh_TW' => "距離範圍最大值",
        ],
        'type' => 'select',
        'elements' => $elements,
        'default' => 5000
    ]
];

echo json_encode($options, JSON_UNESCAPED_UNICODE);
