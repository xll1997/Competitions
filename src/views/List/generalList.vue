<!-- 
  * @Descripttion: 2021-01-22
  * @version:
  * @Date: 总榜/个人榜
  -->
<template>
  <div class="gen">
    <div class="img">
      <img src="@/assets/img/list/list_one/sszk.png" alt />
    </div>
    <div class="con">
      <!-- 左侧下拉菜单 -->
      <ListSelect :listSelectData="listSelectData" />
      <!-- 右侧表格 -->
      <!-- 总榜 -->
      <GeneralListTable
        :generalList="generalList"
        v-if="$route.params.id == 0"
      />
      <!-- 个人榜 -->
      <PersonalListTable :personal="personal" v-if="$route.params.id == 1" />
      <!-- 题榜 -->
      <TitleList :titleListData="titleListData" v-if="$route.params.id == 2" />
    </div>
  </div>
</template>

<script>
import ListSelect from '@/components/list/ListSelect'
import GeneralListTable from '@/components/list/GeneralListTable'
import PersonalListTable from '@/components/list/PersonalListTable'
import TitleList from '@/components/list/titleList/TitleList'
import Api from '../../api/api'
export default {
  components: {
    ListSelect,
    GeneralListTable,
    PersonalListTable,
    TitleList
  },
  data() {
    return {
      listSelectData: [
        {
          name: '全部行业',
          total: 500,
          teamMember: 432,
          onLine: 420,
          answer: 256,
          teamMemberTotal: 432,
          onLineTeam: 420,
          answerTeam: 256,
          tipsTotal: 432,
          beConquered: 420,
          notAnswer: 256,
          bg: {
            backgroundImage:
              'url(' + require('../../assets/img/list/list_two/qbhy.png') + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%'
          }
        },
        {
          name: '能源',
          total: 500,
          teamMember: 432,
          onLine: 420,
          answer: 256,
          teamMemberTotal: 432,
          onLineTeam: 420,
          answerTeam: 256,
          tipsTotal: 432,
          beConquered: 420,
          notAnswer: 256,
          bg: {
            backgroundImage:
              'url(' + require('../../assets/img/list/list_two/ny.png') + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%'
          }
        },
        {
          name: '高校',
          total: 500,
          teamMember: 432,
          onLine: 420,
          answer: 256,
          teamMemberTotal: 432,
          onLineTeam: 420,
          answerTeam: 256,
          tipsTotal: 432,
          beConquered: 420,
          notAnswer: 256,
          bg: {
            backgroundImage:
              'url(' + require('../../assets/img/list/list_two/gx.png') + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%'
          }
        },
        {
          name: '测评机构',
          total: 500,
          teamMember: 432,
          onLine: 420,
          answer: 256,
          teamMemberTotal: 432,
          onLineTeam: 420,
          answerTeam: 256,
          tipsTotal: 432,
          beConquered: 420,
          notAnswer: 256,
          bg: {
            backgroundImage:
              'url(' + require('../../assets/img/list/list_two/cpjg.png') + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%'
          }
        }
      ],
      // 总榜数据
      generalList: {
        tHead: [
          '名次',
          '战队',
          '行业',
          '总分',
          '与上一名相差',
          '解题数',
          '强项',
          '一血数'
        ],
        dataList: [
          {
            id: 1,
            team: 'G90987',
            industry: '测评机构',
            totalScore: '3456',
            disparity: '234',
            problemSolving: '23',
            strengths: 'A类',
            firstBlood: {
              num: 3,
              data: [
                {
                  tips: 'A类-VM',
                  time: '00:23:54',
                  answer: 'P909382'
                },
                {
                  tips: 'E类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                },
                {
                  tips: 'C类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                }
              ]
            }
          },
          {
            id: 2,
            team: 'G35389',
            industry: '测评机构',
            totalScore: '3456',
            disparity: '234',
            problemSolving: '23',
            strengths: 'E类',
            firstBlood: {
              num: 3,
              data: [
                {
                  tips: 'A类-VM',
                  time: '00:23:54',
                  answer: 'P909382'
                },
                {
                  tips: 'E类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                },
                {
                  tips: 'C类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                }
              ]
            }
          },
          {
            id: 3,
            team: 'G90987',
            industry: '测评机构',
            totalScore: '3456',
            disparity: '234',
            problemSolving: '23',
            strengths: 'A类',
            firstBlood: {
              num: 3,
              data: [
                {
                  tips: 'A类-VM',
                  time: '00:23:54',
                  answer: 'P909382'
                },
                {
                  tips: 'E类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                },
                {
                  tips: 'C类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                }
              ]
            }
          },
          {
            id: 4,
            team: 'G90987',
            industry: '测评机构',
            totalScore: '3456',
            disparity: '234',
            problemSolving: '23',
            strengths: 'A类',
            firstBlood: {
              num: 3,
              data: [
                {
                  tips: 'A类-VM',
                  time: '00:23:54',
                  answer: 'P909382'
                },
                {
                  tips: 'E类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                },
                {
                  tips: 'C类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                }
              ]
            }
          },
          {
            id: 5,
            team: 'G90987',
            industry: '测评机构',
            totalScore: '3456',
            disparity: '234',
            problemSolving: '23',
            strengths: 'A类',
            firstBlood: {
              num: 0,
              data: [
                {
                  tips: 'A类-VM',
                  time: '00:23:54',
                  answer: 'P909382'
                },
                {
                  tips: 'E类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                },
                {
                  tips: 'C类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                }
              ]
            }
          },
          {
            id: 6,
            team: 'G90987',
            industry: '测评机构',
            totalScore: '3456',
            disparity: '234',
            problemSolving: '23',
            strengths: 'A类',
            firstBlood: {
              num: 3,
              data: [
                {
                  tips: 'A类-VM',
                  time: '00:23:54',
                  answer: 'P909382'
                },
                {
                  tips: 'E类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                },
                {
                  tips: 'C类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                }
              ]
            }
          },
          {
            id: 7,
            team: 'G90988',
            industry: '测评机构',
            totalScore: '3456',
            disparity: '2554',
            problemSolving: '23',
            strengths: 'A类',
            firstBlood: {
              num: 3,
              data: [
                {
                  tips: 'A类-VM',
                  time: '00:23:54',
                  answer: 'P909382'
                },
                {
                  tips: 'E类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                },
                {
                  tips: 'C类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                }
              ]
            }
          },
          {
            id: 8,
            team: 'G92287',
            industry: '测评机构',
            totalScore: '3456',
            disparity: '234',
            problemSolving: '23',
            strengths: 'B类',
            firstBlood: {
              num: 3,
              data: [
                {
                  tips: 'A类-VM',
                  time: '00:23:54',
                  answer: 'P909382'
                },
                {
                  tips: 'E类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                },
                {
                  tips: 'C类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                }
              ]
            }
          },
          {
            id: 9,
            team: 'G90987',
            industry: '测评机构',
            totalScore: '3456',
            disparity: '234',
            problemSolving: '23',
            strengths: 'A类',
            firstBlood: {
              num: 3,
              data: [
                {
                  tips: 'A类-VM',
                  time: '00:23:54',
                  answer: 'P909382'
                },
                {
                  tips: 'E类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                },
                {
                  tips: 'C类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                }
              ]
            }
          },
          {
            id: 10,
            team: 'G55587',
            industry: '测评机构',
            totalScore: '3456',
            disparity: '234',
            problemSolving: '23',
            strengths: 'A类',
            firstBlood: {
              num: 3,
              data: [
                {
                  tips: 'A类-VM',
                  time: '00:23:54',
                  answer: 'P909382'
                },
                {
                  tips: 'E类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                },
                {
                  tips: 'C类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                }
              ]
            }
          },
          {
            id: 11,
            team: 'G32987',
            industry: '测评机构',
            totalScore: '3456',
            disparity: '234',
            problemSolving: '23',
            strengths: 'A类',
            firstBlood: {
              num: 3,
              data: [
                {
                  tips: 'A类-VM',
                  time: '00:23:54',
                  answer: 'P909382'
                },
                {
                  tips: 'E类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                },
                {
                  tips: 'C类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                }
              ]
            }
          },
          {
            id: 12,
            team: 'G90987',
            industry: '测评机构',
            totalScore: '3456',
            disparity: '234',
            problemSolving: '23',
            strengths: 'A类',
            firstBlood: {
              num: 3,
              data: [
                {
                  tips: 'A类-VM',
                  time: '00:23:54',
                  answer: 'P909382'
                },
                {
                  tips: 'E类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                },
                {
                  tips: 'C类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                }
              ]
            }
          }
        ]
      },
      // 个人榜
      personal: {
        tHead: [
          '名次',
          '队员',
          '所在战队',
          '行业',
          '个人得分',
          '与后一名分差',
          '解题数',
          '强项',
          '一血数'
        ],
        dataList: [
          {
            id: 1,
            ip: 'P52255',
            team: 'G90987',
            industry: '测评机构',
            totalScore: '3456',
            disparity: '234',
            problemSolving: '23',
            strengths: 'A类',
            firstBlood: {
              num: 3,
              data: [
                {
                  tips: 'A类-VM',
                  time: '00:23:54',
                  answer: 'P909382'
                },
                {
                  tips: 'E类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                },
                {
                  tips: 'C类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                }
              ]
            }
          },
          {
            id: 2,
            ip: 'P52155',
            team: 'G35389',
            industry: '测评机构',
            totalScore: '3456',
            disparity: '234',
            problemSolving: '23',
            strengths: 'E类',
            firstBlood: {
              num: 3,
              data: [
                {
                  tips: 'A类-VM',
                  time: '00:23:54',
                  answer: 'P909382'
                },
                {
                  tips: 'E类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                },
                {
                  tips: 'C类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                }
              ]
            }
          },
          {
            id: 3,
            ip: 'P52255',
            team: 'G90987',
            industry: '测评机构',
            totalScore: '3456',
            disparity: '234',
            problemSolving: '23',
            strengths: 'A类',
            firstBlood: {
              num: 3,
              data: [
                {
                  tips: 'A类-VM',
                  time: '00:23:54',
                  answer: 'P909382'
                },
                {
                  tips: 'E类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                },
                {
                  tips: 'C类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                }
              ]
            }
          },
          {
            id: 4,
            ip: 'P52255',
            team: 'G90987',
            industry: '测评机构',
            totalScore: '3456',
            disparity: '234',
            problemSolving: '23',
            strengths: 'A类',
            firstBlood: {
              num: 3,
              data: [
                {
                  tips: 'A类-VM',
                  time: '00:23:54',
                  answer: 'P909382'
                },
                {
                  tips: 'E类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                },
                {
                  tips: 'C类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                }
              ]
            }
          },
          {
            id: 5,
            ip: 'P52255',
            team: 'G90987',
            industry: '测评机构',
            totalScore: '3456',
            disparity: '234',
            problemSolving: '23',
            strengths: 'A类',
            firstBlood: {
              num: 3,
              data: [
                {
                  tips: 'A类-VM',
                  time: '00:23:54',
                  answer: 'P909382'
                },
                {
                  tips: 'E类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                },
                {
                  tips: 'C类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                }
              ]
            }
          },
          {
            id: 6,
            ip: 'P52255',
            team: 'G90987',
            industry: '测评机构',
            totalScore: '3456',
            disparity: '234',
            problemSolving: '23',
            strengths: 'A类',
            firstBlood: {
              num: 3,
              data: [
                {
                  tips: 'A类-VM',
                  time: '00:23:54',
                  answer: 'P909382'
                },
                {
                  tips: 'E类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                },
                {
                  tips: 'C类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                }
              ]
            }
          },
          {
            id: 7,
            ip: 'P52255',
            team: 'G90988',
            industry: '测评机构',
            totalScore: '3456',
            disparity: '2554',
            problemSolving: '23',
            strengths: 'A类',
            firstBlood: {
              num: 3,
              data: [
                {
                  tips: 'A类-VM',
                  time: '00:23:54',
                  answer: 'P909382'
                },
                {
                  tips: 'E类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                },
                {
                  tips: 'C类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                }
              ]
            }
          },
          {
            id: 8,
            ip: 'P52255',
            team: 'G92287',
            industry: '测评机构',
            totalScore: '3456',
            disparity: '234',
            problemSolving: '23',
            strengths: 'B类',
            firstBlood: {
              num: 0,
              data: [
                {
                  tips: 'A类-VM',
                  time: '00:23:54',
                  answer: 'P909382'
                },
                {
                  tips: 'E类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                },
                {
                  tips: 'C类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                }
              ]
            }
          },
          {
            id: 9,
            ip: 'P52255',
            team: 'G90987',
            industry: '测评机构',
            totalScore: '3456',
            disparity: '234',
            problemSolving: '23',
            strengths: 'A类',
            firstBlood: {
              num: 3,
              data: [
                {
                  tips: 'A类-VM',
                  time: '00:23:54',
                  answer: 'P909382'
                },
                {
                  tips: 'E类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                },
                {
                  tips: 'C类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                }
              ]
            }
          },
          {
            id: 10,
            ip: 'P52255',
            team: 'G55587',
            industry: '测评机构',
            totalScore: '3456',
            disparity: '234',
            problemSolving: '23',
            strengths: 'A类',
            firstBlood: {
              num: 3,
              data: [
                {
                  tips: 'A类-VM',
                  time: '00:23:54',
                  answer: 'P909382'
                },
                {
                  tips: 'E类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                },
                {
                  tips: 'C类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                }
              ]
            }
          },
          {
            id: 11,
            ip: 'P52255',
            team: 'G32987',
            industry: '测评机构',
            totalScore: '3456',
            disparity: '234',
            problemSolving: '23',
            strengths: 'A类',
            firstBlood: {
              num: 3,
              data: [
                {
                  tips: 'A类-VM',
                  time: '00:23:54',
                  answer: 'P909382'
                },
                {
                  tips: 'E类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                },
                {
                  tips: 'C类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                }
              ]
            }
          },
          {
            id: 12,
            ip: 'P52255',
            team: 'G90987',
            industry: '测评机构',
            totalScore: '3456',
            disparity: '234',
            problemSolving: '23',
            strengths: 'A类',
            firstBlood: {
              num: 3,
              data: [
                {
                  tips: 'A类-VM',
                  time: '00:23:54',
                  answer: 'P909382'
                },
                {
                  tips: 'E类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                },
                {
                  tips: 'C类-enc',
                  time: '00:55:54',
                  answer: 'P235382'
                }
              ]
            }
          }
        ]
      },
      // 题榜
      titleListData: {
        // 难度榜
        difficuliyData: {
          tHead: [
            '难度',
            '题目',
            '解出队伍',
            '最快耗时',
            'Top1',
            'Top2',
            'Top3'
          ],
          dataList: [
            {
              difficulty: 1,
              tips: 'A类-VM',
              team: 1,
              fastestTime: '06: 23: 45',
              topOne: 'G56234-能源',
              topTwo: 'G56285-能源',
              topThree: 'G73285-能源'
            },
            {
              difficulty: 2,
              tips: 'A类-VM',
              team: 2,
              fastestTime: '06: 23: 45',
              topOne: 'G56234-能源',
              topTwo: 'G56285-能源',
              topThree: 'G73285-能源'
            },
            {
              difficulty: 3,
              tips: 'A类-VM',
              team: 3,
              fastestTime: '06: 23: 45',
              topOne: 'G56234-能源',
              topTwo: 'G56285-能源',
              topThree: 'G73285-能源'
            },
            {
              difficulty: 4,
              tips: 'A类-VM',
              team: 3,
              fastestTime: '06: 23: 45',
              topOne: 'G56234-能源',
              topTwo: 'G56285-能源',
              topThree: 'G73285-能源'
            },
            {
              difficulty: 5,
              tips: 'A类-VM',
              team: 3,
              fastestTime: '06: 23: 45',
              topOne: 'G56234-能源',
              topTwo: 'G56285-能源',
              topThree: 'G73285-能源'
            },
            {
              difficulty: 6,
              tips: 'A类-VM',
              team: 3,
              fastestTime: '06: 23: 45',
              topOne: 'G56234-能源',
              topTwo: 'G56285-能源',
              topThree: 'G73285-能源'
            },
            {
              difficulty: 7,
              tips: 'A类-VM',
              team: 3,
              fastestTime: '06: 23: 45',
              topOne: 'G56234-能源',
              topTwo: 'G56285-能源',
              topThree: 'G73285-能源'
            },
            {
              difficulty: 8,
              tips: 'A类-VM',
              team: 4,
              fastestTime: '06: 23: 45',
              topOne: 'G56234-能源',
              topTwo: 'G56285-能源',
              topThree: 'G73285-能源'
            },
            {
              difficulty: 9,
              tips: 'A类-VM',
              team: 4,
              fastestTime: '06: 23: 45',
              topOne: 'G56234-能源',
              topTwo: 'G56285-能源',
              topThree: 'G73285-能源'
            },
            {
              difficulty: 10,
              tips: 'A类-VM',
              team: 5,
              fastestTime: '06: 23: 45',
              topOne: 'G56234-能源',
              topTwo: 'G56285-能源',
              topThree: 'G73285-能源'
            },
            {
              difficulty: 11,
              tips: 'A类-VM',
              team: 5,
              fastestTime: '06: 23: 45',
              topOne: 'G56234-能源',
              topTwo: 'G56285-能源',
              topThree: 'G73285-能源'
            },
            {
              difficulty: 12,
              tips: 'A类-VM',
              team: 5,
              fastestTime: '06: 23: 45',
              topOne: 'G56234-能源',
              topTwo: 'G56285-能源',
              topThree: 'G73285-能源'
            }
          ]
        },
        // 斩题榜
        cutTopicData: {
          tHead: {
            num: '排名',
            team: '战队',
            score: '总分',
            classA: {
              name: 'A类',
              include: ['VM', 'enc', 'pell', 'mecliece']
            },
            classB: {
              name: 'B类',
              include: ['encnote', 'SecureBox', 'MarksMan', '密码机器']
            },
            classC: {
              name: 'C类',
              include: ['F1', 'F2', 'F3']
            }
          },
          dataList: [
            {
              num: 1,
              team: 'G56234-能源',
              score: '234',
              classA: [0, 0, 0, 0],
              classB: [1, 0, 0, 0],
              classC: [0, 0, 0]
            },
            {
              num: 2,
              team: 'G56234-能源',
              score: '234',
              classA: [0, 0, 0, 0],
              classB: [0, 0, 0, 1],
              classC: [0, 0, 0]
            },
            {
              num: 3,
              team: 'G56234-能源',
              score: '234',
              classA: [0, 0, 1, 0],
              classB: [0, 0, 1, 1],
              classC: [0, 0, 0]
            },
            {
              num: 4,
              team: 'G56234-能源',
              score: '234',
              classA: [0, 0, 1, 0],
              classB: [1, 0, 0, 1],
              classC: [0, 0, 0]
            },
            {
              num: 5,
              team: 'G56234-能源',
              score: '234',
              classA: [0, 1, 0, 1],
              classB: [0, 1, 1, 1],
              classC: [0, 0, 0]
            },
            {
              num: 6,
              team: 'G56234-能源',
              score: '234',
              classA: [0, 0, 0, 0],
              classB: [0, 0, 0, 0],
              classC: [0, 1, 0]
            },
            {
              num: 7,
              team: 'G56234-能源',
              score: '234',
              classA: [0, 0, 1, 0],
              classB: [0, 0, 1, 1],
              classC: [0, 0, 0]
            },
            {
              num: 8,
              team: 'G56234-能源',
              score: '234',
              classA: [1, 0, 1, 0],
              classB: [0, 0, 1, 1],
              classC: [1, 1, 0]
            },
            {
              num: 9,
              team: 'G56234-能源',
              score: '234',
              classA: [0, 0, 0, 0],
              classB: [1, 1, 1, 1],
              classC: [0, 0, 0]
            },
            {
              num: 10,
              team: 'G56234-能源',
              score: '234',
              classA: [0, 0, 1, 0],
              classB: [0, 0, 1, 1],
              classC: [0, 0, 0]
            },
            {
              num: 11,
              team: 'G56234-能源',
              score: '234',
              classA: [0, 0, 1, 0],
              classB: [0, 0, 1, 1],
              classC: [0, 0, 0]
            },
            {
              num: 12,
              team: 'G56234-能源',
              score: '234',
              classA: [1, 1, 1, 1],
              classB: [0, 0, 1, 1],
              classC: [0, 1, 0]
            }
          ]
        },
        // 题型榜
        titleListData: {
          classData: ['A', 'B', 'C', 'D', 'E'],
          tHead: [
            '名次',
            '战队',
            '该题型得分',
            '与上一名分差',
            '解题数',
            '一血数'
          ],
          dataList: [
            {
              name: 'A',
              data: [
                {
                  id: 1,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 2,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 3,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 4,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 5,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 6,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 0,
                    data: []
                  }
                },
                {
                  id: 7,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 0,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 8,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 9,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 10,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 2,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 11,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 1,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      }
                    ]
                  }
                },
                {
                  id: 12,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 0,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                }
              ]
            },
            {
              name: 'B',
              data: [
                {
                  id: 1,
                  team: 'G55587',
                  totalScore: '32226',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 2,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 3,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 4,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 5,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 6,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 0,
                    data: []
                  }
                },
                {
                  id: 7,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 0,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 8,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 9,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 10,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 2,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 11,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 1,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      }
                    ]
                  }
                },
                {
                  id: 12,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 0,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                }
              ]
            },
            {
              name: 'C',
              data: [
                {
                  id: 1,
                  team: 'G22222',
                  totalScore: '2536',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 2,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 3,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 4,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 5,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 6,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 0,
                    data: []
                  }
                },
                {
                  id: 7,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 0,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 8,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 9,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 10,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 2,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 11,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 1,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      }
                    ]
                  }
                },
                {
                  id: 12,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 0,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                }
              ]
            },
            {
              name: 'D',
              data: [
                {
                  id: 1,
                  team: 'G08000',
                  totalScore: '1658',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 2,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 3,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 4,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 5,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 6,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 0,
                    data: []
                  }
                },
                {
                  id: 7,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 0,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 8,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 9,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 10,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 2,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 11,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 1,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      }
                    ]
                  }
                },
                {
                  id: 12,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 0,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                }
              ]
            },
            {
              name: 'E',
              data: [
                {
                  id: 1,
                  team: 'G75868',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 2,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 3,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 4,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 5,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 6,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 0,
                    data: []
                  }
                },
                {
                  id: 7,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 0,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 8,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 9,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 3,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 10,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 2,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                },
                {
                  id: 11,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 1,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      }
                    ]
                  }
                },
                {
                  id: 12,
                  team: 'G90987',
                  totalScore: '3456',
                  disparity: '234',
                  problemSolving: '23',
                  firstBlood: {
                    num: 0,
                    data: [
                      {
                        tips: 'A类-VM',
                        time: '00:23:54',
                        answer: 'P909382'
                      },
                      {
                        tips: 'E类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      },
                      {
                        tips: 'C类-enc',
                        time: '00:55:54',
                        answer: 'P235382'
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    // console.log('$route', this.$route)
    this.industryData()
  },
  methods: {
    industryData() {
      Api.getIndustryData().then(res => {
        console.log('全部行业', res)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.gen {
  width: 100%;
  margin-bottom: 50px;
  .img {
    position: absolute;
    z-index: 99;
    top: 136px;
    left: 50px;
    img {
      width: 184px;
      height: 85px;
    }
  }
  .con {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 47px 0 0;
    margin-top: 87px;
  }
}
</style>
