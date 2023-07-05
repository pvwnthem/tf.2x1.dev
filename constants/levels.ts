export interface Level {
    xpRequired: string;
    badge: string;
}

export interface Levels {
    [key: number]: Level;
}

export interface Title {
    title: string;
}

export interface Titles {
    [key: number]: Title;
}

export const deletedUserBadge = "https://i.imgur.com/uGWrpre.png";

export const titles: Titles = {
    5: {
        title: "Novice",
    },
    10: {
        title: "Apprentice",
    },
    15: {
        title: "Journeyman",
    },
    20: {
        title: "Adept",
    },
    25: {
        title: "Skilled",
    },
    30: {
        title: "Seasoned",
    },
    35: {
        title: "Expert",
    },
    40: {
        title: "Artisan",
    },
    45: {
        title: "Master",
    },
    50: {
        title: "Elite",
    },
    55: {
        title: "Grandmaster",
    },
    60: {
        title: "Champion",
    },
    65: {
        title: "Legend",
    },
    70: {
        title: "Hero",
    },
    75: {
        title: "Mythic",
    },
    80: {
        title: "Divine",
    },
    85: {
        title: "Demigod",
    },
    90: {
        title: "Titan",
    },
    95: {
        title: "Immortal",
    },
    100: {
        title: "Ascendant",
    },
    105: {
        title: "Eternal",
    },
    110: {
        title: "Sovereign",
    },
    115: {
        title: "Celestial",
    },
    120: {
        title: "Transcendent",
    },
    125: {
        title: "Omniscient",
    },
    130: {
        title: "Ineffable",
    },
    135: {
        title: "Sublime",
    },
    140: {
        title: "Incomprehensible",
    },
    145: {
        title: "Cosmic",
    },
    150: {
        title: "Infinite",
    },
};

/* 
    levels are scraped using the python script scrapeLevels.py
    and then formatted using es6.py
*/
export const levels: Levels = {
    1: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/9/96/Level_1_Casual.png/96px-Level_1_Casual.png",
        xpRequired: "0",
    },
    2: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/a/a1/Level_2_Casual.png/108px-Level_2_Casual.png",
        xpRequired: "750",
    },
    3: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/8/8e/Level_3_Casual.png/96px-Level_3_Casual.png",
        xpRequired: "1500",
    },
    4: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/3/3d/Level_4_Casual.png/122px-Level_4_Casual.png",
        xpRequired: "2250",
    },
    5: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/a/a5/Level_5_Casual.png/109px-Level_5_Casual.png",
        xpRequired: "3000",
    },
    6: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/3/37/Level_6_Casual.png/151px-Level_6_Casual.png",
        xpRequired: "3750",
    },
    7: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/f/f5/Level_7_Casual.png/170px-Level_7_Casual.png",
        xpRequired: "4500",
    },
    8: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/3/3d/Level_8_Casual.png/151px-Level_8_Casual.png",
        xpRequired: "5250",
    },
    9: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/f/f2/Level_9_Casual.png/170px-Level_9_Casual.png",
        xpRequired: "6000",
    },
    10: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/e/eb/Level_10_Casual.png/151px-Level_10_Casual.png",
        xpRequired: "6750",
    },
    11: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/0/05/Level_11_Casual.png/159px-Level_11_Casual.png",
        xpRequired: "7500",
    },
    12: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/7/74/Level_12_Casual.png/176px-Level_12_Casual.png",
        xpRequired: "8250",
    },
    13: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/8/8f/Level_13_Casual.png/159px-Level_13_Casual.png",
        xpRequired: "9000",
    },
    14: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/3/3f/Level_14_Casual.png/176px-Level_14_Casual.png",
        xpRequired: "9750",
    },
    15: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/3/3f/Level_15_Casual.png/159px-Level_15_Casual.png",
        xpRequired: "10500",
    },
    16: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/e/ea/Level_16_Casual.png/187px-Level_16_Casual.png",
        xpRequired: "11250",
    },
    17: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/0/05/Level_17_Casual.png/201px-Level_17_Casual.png",
        xpRequired: "12000",
    },
    18: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/0/0d/Level_18_Casual.png/187px-Level_18_Casual.png",
        xpRequired: "12750",
    },
    19: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/e/e6/Level_19_Casual.png/201px-Level_19_Casual.png",
        xpRequired: "13500",
    },
    20: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/f/f8/Level_20_Casual.png/187px-Level_20_Casual.png",
        xpRequired: "14250",
    },
    21: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/d/df/Level_21_Casual.png/148px-Level_21_Casual.png",
        xpRequired: "15000",
    },
    22: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/2/2c/Level_22_Casual.png/148px-Level_22_Casual.png",
        xpRequired: "15750",
    },
    23: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/5/57/Level_23_Casual.png/148px-Level_23_Casual.png",
        xpRequired: "16500",
    },
    24: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/0/02/Level_24_Casual.png/148px-Level_24_Casual.png",
        xpRequired: "17250",
    },
    25: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/a/a8/Level_25_Casual.png/148px-Level_25_Casual.png",
        xpRequired: "18000",
    },
    26: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/1/10/Level_26_Casual.png/96px-Level_26_Casual.png",
        xpRequired: "1250",
    },
    27: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/b/b1/Level_27_Casual.png/108px-Level_27_Casual.png",
        xpRequired: "20000",
    },
    28: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/5/51/Level_28_Casual.png/96px-Level_28_Casual.png",
        xpRequired: "21250",
    },
    29: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/8/81/Level_29_Casual.png/122px-Level_29_Casual.png",
        xpRequired: "22500",
    },
    30: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/f/f9/Level_30_Casual.png/109px-Level_30_Casual.png",
        xpRequired: "23750",
    },
    31: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/f/fc/Level_31_Casual.png/151px-Level_31_Casual.png",
        xpRequired: "25000",
    },
    32: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/0/00/Level_32_Casual.png/170px-Level_32_Casual.png",
        xpRequired: "26250",
    },
    33: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/0/08/Level_33_Casual.png/151px-Level_33_Casual.png",
        xpRequired: "27500",
    },
    34: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/1/11/Level_34_Casual.png/170px-Level_34_Casual.png",
        xpRequired: "28750",
    },
    35: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/7/78/Level_35_Casual.png/151px-Level_35_Casual.png",
        xpRequired: "30000",
    },
    36: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/7/72/Level_36_Casual.png/159px-Level_36_Casual.png",
        xpRequired: "31250",
    },
    37: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/b/b3/Level_37_Casual.png/176px-Level_37_Casual.png",
        xpRequired: "32500",
    },
    38: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/7/7f/Level_38_Casual.png/159px-Level_38_Casual.png",
        xpRequired: "33750",
    },
    39: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/0/05/Level_39_Casual.png/176px-Level_39_Casual.png",
        xpRequired: "35000",
    },
    40: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/b/b6/Level_40_Casual.png/159px-Level_40_Casual.png",
        xpRequired: "36250",
    },
    41: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/2/26/Level_41_Casual.png/187px-Level_41_Casual.png",
        xpRequired: "37500",
    },
    42: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/f/f2/Level_42_Casual.png/201px-Level_42_Casual.png",
        xpRequired: "38750",
    },
    43: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/2/2e/Level_43_Casual.png/187px-Level_43_Casual.png",
        xpRequired: "40000",
    },
    44: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/f/f8/Level_44_Casual.png/201px-Level_44_Casual.png",
        xpRequired: "41250",
    },
    45: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/9/98/Level_45_Casual.png/187px-Level_45_Casual.png",
        xpRequired: "42500",
    },
    46: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/d/d9/Level_46_Casual.png/148px-Level_46_Casual.png",
        xpRequired: "43750",
    },
    47: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/3/37/Level_47_Casual.png/148px-Level_47_Casual.png",
        xpRequired: "45000",
    },
    48: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/2/23/Level_48_Casual.png/148px-Level_48_Casual.png",
        xpRequired: "46250",
    },
    49: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/3/33/Level_49_Casual.png/148px-Level_49_Casual.png",
        xpRequired: "47500",
    },
    50: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/d/d0/Level_50_Casual.png/148px-Level_50_Casual.png",
        xpRequired: "48750",
    },
    51: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/4/41/Level_51_Casual.png/96px-Level_51_Casual.png",
        xpRequired: "2000",
    },
    52: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/0/0e/Level_52_Casual.png/108px-Level_52_Casual.png",
        xpRequired: "52000",
    },
    53: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/a/a3/Level_53_Casual.png/96px-Level_53_Casual.png",
        xpRequired: "54000",
    },
    54: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/2/29/Level_54_Casual.png/122px-Level_54_Casual.png",
        xpRequired: "56000",
    },
    55: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/0/0d/Level_55_Casual.png/109px-Level_55_Casual.png",
        xpRequired: "58000",
    },
    56: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/3/37/Level_56_Casual.png/151px-Level_56_Casual.png",
        xpRequired: "60000",
    },
    57: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/2/26/Level_57_Casual.png/170px-Level_57_Casual.png",
        xpRequired: "62000",
    },
    58: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/9/9c/Level_58_Casual.png/151px-Level_58_Casual.png",
        xpRequired: "64000",
    },
    59: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/7/72/Level_59_Casual.png/170px-Level_59_Casual.png",
        xpRequired: "66000",
    },
    60: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/e/e9/Level_60_Casual.png/151px-Level_60_Casual.png",
        xpRequired: "68000",
    },
    61: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/8/84/Level_61_Casual.png/159px-Level_61_Casual.png",
        xpRequired: "70000",
    },
    62: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/0/0a/Level_62_Casual.png/176px-Level_62_Casual.png",
        xpRequired: "72000",
    },
    63: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/a/a9/Level_63_Casual.png/159px-Level_63_Casual.png",
        xpRequired: "74000",
    },
    64: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/6/6f/Level_64_Casual.png/176px-Level_64_Casual.png",
        xpRequired: "76000",
    },
    65: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/0/08/Level_65_Casual.png/159px-Level_65_Casual.png",
        xpRequired: "78000",
    },
    66: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/4/45/Level_66_Casual.png/187px-Level_66_Casual.png",
        xpRequired: "80000",
    },
    67: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/9/91/Level_67_Casual.png/201px-Level_67_Casual.png",
        xpRequired: "82000",
    },
    68: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/8/8e/Level_68_Casual.png/187px-Level_68_Casual.png",
        xpRequired: "84000",
    },
    69: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/8/8a/Level_69_Casual.png/201px-Level_69_Casual.png",
        xpRequired: "86000",
    },
    70: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/c/cc/Level_70_Casual.png/187px-Level_70_Casual.png",
        xpRequired: "88000",
    },
    71: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/c/c8/Level_71_Casual.png/148px-Level_71_Casual.png",
        xpRequired: "90000",
    },
    72: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/c/c2/Level_72_Casual.png/148px-Level_72_Casual.png",
        xpRequired: "92000",
    },
    73: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/c/c7/Level_73_Casual.png/148px-Level_73_Casual.png",
        xpRequired: "94000",
    },
    74: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/1/1a/Level_74_Casual.png/148px-Level_74_Casual.png",
        xpRequired: "96000",
    },
    75: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/5/5d/Level_75_Casual.png/148px-Level_75_Casual.png",
        xpRequired: "98000",
    },
    76: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/6/64/Level_76_Casual.png/96px-Level_76_Casual.png",
        xpRequired: "3000",
    },
    77: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/9/9b/Level_77_Casual.png/108px-Level_77_Casual.png",
        xpRequired: "103000",
    },
    78: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/0/01/Level_78_Casual.png/96px-Level_78_Casual.png",
        xpRequired: "106000",
    },
    79: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/d/d1/Level_79_Casual.png/122px-Level_79_Casual.png",
        xpRequired: "109000",
    },
    80: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/7/70/Level_80_Casual.png/109px-Level_80_Casual.png",
        xpRequired: "112000",
    },
    81: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/f/f0/Level_81_Casual.png/151px-Level_81_Casual.png",
        xpRequired: "115000",
    },
    82: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/c/c3/Level_82_Casual.png/170px-Level_82_Casual.png",
        xpRequired: "118000",
    },
    83: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/9/9c/Level_83_Casual.png/151px-Level_83_Casual.png",
        xpRequired: "121000",
    },
    84: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/c/c2/Level_84_Casual.png/170px-Level_84_Casual.png",
        xpRequired: "124000",
    },
    85: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/0/05/Level_85_Casual.png/151px-Level_85_Casual.png",
        xpRequired: "127000",
    },
    86: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/4/41/Level_86_Casual.png/159px-Level_86_Casual.png",
        xpRequired: "130000",
    },
    87: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/9/91/Level_87_Casual.png/176px-Level_87_Casual.png",
        xpRequired: "133000",
    },
    88: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/1/19/Level_88_Casual.png/159px-Level_88_Casual.png",
        xpRequired: "136000",
    },
    89: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/d/db/Level_89_Casual.png/176px-Level_89_Casual.png",
        xpRequired: "139000",
    },
    90: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/7/7a/Level_90_Casual.png/159px-Level_90_Casual.png",
        xpRequired: "142000",
    },
    91: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/8/80/Level_91_Casual.png/187px-Level_91_Casual.png",
        xpRequired: "145000",
    },
    92: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/6/65/Level_92_Casual.png/201px-Level_92_Casual.png",
        xpRequired: "148000",
    },
    93: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/7/73/Level_93_Casual.png/187px-Level_93_Casual.png",
        xpRequired: "151000",
    },
    94: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/9/94/Level_94_Casual.png/201px-Level_94_Casual.png",
        xpRequired: "154000",
    },
    95: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/3/32/Level_95_Casual.png/187px-Level_95_Casual.png",
        xpRequired: "157000",
    },
    96: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/1/1b/Level_96_Casual.png/148px-Level_96_Casual.png",
        xpRequired: "160000",
    },
    97: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/d/d6/Level_97_Casual.png/148px-Level_97_Casual.png",
        xpRequired: "163000",
    },
    98: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/8/84/Level_98_Casual.png/148px-Level_98_Casual.png",
        xpRequired: "166000",
    },
    99: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/a/a4/Level_99_Casual.png/148px-Level_99_Casual.png",
        xpRequired: "169000",
    },
    100: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/2/21/Level_100_Casual.png/148px-Level_100_Casual.png",
        xpRequired: "172000",
    },
    101: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/3/39/Level_101_Casual.png/96px-Level_101_Casual.png",
        xpRequired: "4500",
    },
    102: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/0/0f/Level_102_Casual.png/108px-Level_102_Casual.png",
        xpRequired: "179500",
    },
    103: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/e/ee/Level_103_Casual.png/96px-Level_103_Casual.png",
        xpRequired: "184000",
    },
    104: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/4/40/Level_104_Casual.png/122px-Level_104_Casual.png",
        xpRequired: "188500",
    },
    105: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/1/1c/Level_105_Casual.png/109px-Level_105_Casual.png",
        xpRequired: "193000",
    },
    106: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/e/e7/Level_106_Casual.png/151px-Level_106_Casual.png",
        xpRequired: "197500",
    },
    107: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/4/46/Level_107_Casual.png/170px-Level_107_Casual.png",
        xpRequired: "202000",
    },
    108: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/6/6c/Level_108_Casual.png/151px-Level_108_Casual.png",
        xpRequired: "206500",
    },
    109: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/a/a8/Level_109_Casual.png/170px-Level_109_Casual.png",
        xpRequired: "211000",
    },
    110: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/1/11/Level_110_Casual.png/151px-Level_110_Casual.png",
        xpRequired: "215500",
    },
    111: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/7/72/Level_111_Casual.png/159px-Level_111_Casual.png",
        xpRequired: "220000",
    },
    112: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/7/74/Level_112_Casual.png/176px-Level_112_Casual.png",
        xpRequired: "224500",
    },
    113: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/7/71/Level_113_Casual.png/159px-Level_113_Casual.png",
        xpRequired: "229000",
    },
    114: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/f/f7/Level_114_Casual.png/176px-Level_114_Casual.png",
        xpRequired: "233500",
    },
    115: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/d/d3/Level_115_Casual.png/159px-Level_115_Casual.png",
        xpRequired: "238000",
    },
    116: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/f/fd/Level_116_Casual.png/187px-Level_116_Casual.png",
        xpRequired: "242500",
    },
    117: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/e/e9/Level_117_Casual.png/201px-Level_117_Casual.png",
        xpRequired: "247000",
    },
    118: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/9/98/Level_118_Casual.png/187px-Level_118_Casual.png",
        xpRequired: "251500",
    },
    119: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/4/44/Level_119_Casual.png/201px-Level_119_Casual.png",
        xpRequired: "256000",
    },
    120: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/7/71/Level_120_Casual.png/187px-Level_120_Casual.png",
        xpRequired: "260500",
    },
    121: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/0/0a/Level_121_Casual.png/148px-Level_121_Casual.png",
        xpRequired: "265000",
    },
    122: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/9/9a/Level_122_Casual.png/148px-Level_122_Casual.png",
        xpRequired: "269500",
    },
    123: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/a/a2/Level_123_Casual.png/148px-Level_123_Casual.png",
        xpRequired: "274000",
    },
    124: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/c/c2/Level_124_Casual.png/148px-Level_124_Casual.png",
        xpRequired: "278500",
    },
    125: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/4/4d/Level_125_Casual.png/148px-Level_125_Casual.png",
        xpRequired: "283000",
    },
    126: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/1/15/Level_126_Casual.png/96px-Level_126_Casual.png",
        xpRequired: "7000",
    },
    127: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/b/b6/Level_127_Casual.png/108px-Level_127_Casual.png",
        xpRequired: "294500",
    },
    128: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/3/3e/Level_128_Casual.png/96px-Level_128_Casual.png",
        xpRequired: "301500",
    },
    129: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/8/86/Level_129_Casual.png/122px-Level_129_Casual.png",
        xpRequired: "308500",
    },
    130: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/f/f6/Level_130_Casual.png/109px-Level_130_Casual.png",
        xpRequired: "315500",
    },
    131: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/7/7a/Level_131_Casual.png/151px-Level_131_Casual.png",
        xpRequired: "322500",
    },
    132: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/6/6b/Level_132_Casual.png/170px-Level_132_Casual.png",
        xpRequired: "329500",
    },
    133: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/5/54/Level_133_Casual.png/151px-Level_133_Casual.png",
        xpRequired: "336500",
    },
    134: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/7/7d/Level_134_Casual.png/170px-Level_134_Casual.png",
        xpRequired: "343500",
    },
    135: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/f/f5/Level_135_Casual.png/151px-Level_135_Casual.png",
        xpRequired: "350500",
    },
    136: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/4/4d/Level_136_Casual.png/159px-Level_136_Casual.png",
        xpRequired: "357500",
    },
    137: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/1/11/Level_137_Casual.png/176px-Level_137_Casual.png",
        xpRequired: "364500",
    },
    138: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/c/c7/Level_138_Casual.png/159px-Level_138_Casual.png",
        xpRequired: "371500",
    },
    139: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/9/9c/Level_139_Casual.png/176px-Level_139_Casual.png",
        xpRequired: "378500",
    },
    140: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/c/c4/Level_140_Casual.png/159px-Level_140_Casual.png",
        xpRequired: "385500",
    },
    141: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/8/84/Level_141_Casual.png/187px-Level_141_Casual.png",
        xpRequired: "392500",
    },
    142: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/7/77/Level_142_Casual.png/201px-Level_142_Casual.png",
        xpRequired: "399500",
    },
    143: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/a/a5/Level_143_Casual.png/187px-Level_143_Casual.png",
        xpRequired: "406500",
    },
    144: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/7/79/Level_144_Casual.png/201px-Level_144_Casual.png",
        xpRequired: "413500",
    },
    145: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/4/4d/Level_145_Casual.png/187px-Level_145_Casual.png",
        xpRequired: "420500",
    },
    146: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/7/75/Level_146_Casual.png/148px-Level_146_Casual.png",
        xpRequired: "427500",
    },
    147: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/1/13/Level_147_Casual.png/148px-Level_147_Casual.png",
        xpRequired: "434500",
    },
    148: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/a/ac/Level_148_Casual.png/148px-Level_148_Casual.png",
        xpRequired: "441500",
    },
    149: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/e/ee/Level_149_Casual.png/148px-Level_149_Casual.png",
        xpRequired: "448500",
    },
    150: {
        badge: "https://wiki.teamfortress.com//w/images/thumb/4/40/Level_150_Casual.png/148px-Level_150_Casual.png",
        xpRequired: "455500",
    },
};
