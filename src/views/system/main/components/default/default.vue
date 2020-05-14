<template>
  <el-scrollbar class="bq-main-default" style="height:100%" ref="defaultScroll">
    <el-main>
      <!-- 焦点图 -->
      <div class="banner">
        <!-- 轮播图 -->
        <el-carousel>
          <el-carousel-item>
            <div class="carousel-item item1">
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="carousel-item item2" title="点击跳转到视频" @click="scrollToModelY" style="cursor: pointer">
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="carousel-item item3">
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="carousel-item item4">
            </div>
          </el-carousel-item>
        </el-carousel>
        <div class="guide">
          <ul class="modules banxin">
            <el-tooltip placement="bottom">
              <div slot="content">
                <p>干哈胜利股份还记得尽快改好数据库大哥还是大家客观环境</p>
              </div>
              <li class="li-item">
                <div class="icon vehicle"></div>
                <div class="item-name">Vehicle</div>
              </li>
            </el-tooltip>
            <el-tooltip placement="bottom">
              <div slot="content">多行信息<br/>第二行信息</div>
              <li class="li-item">
                <div class="icon search"></div>
                <div class="item-name">Search</div>
              </li>
            </el-tooltip>
            <el-tooltip placement="bottom">
              <div slot="content">多行信息<br/>第二行信息</div>
              <li class="li-item">
                <div class="icon comparison"></div>
                <div class="item-name">Comparison</div>
              </li>
            </el-tooltip>
            <el-tooltip placement="bottom">
              <div slot="content">多行信息<br/>第二行信息</div>
              <li class="li-item">
                <div class="icon report"></div>
                <div class="item-name">Report</div>
              </li>
            </el-tooltip>
          </ul>
          <el-button type="primary" class="more">点击查看更多
            <i class="el-icon-right" />
          </el-button>
        </div>
      </div>
      <div class="content-main banxin">
        <!-- 新鲜动态 -->
        <h3 class="content-title">新鲜动态</h3>
        <ul class="fresh-dynamic">
          <li>
            <p>最新展会</p>
            <p><a href="#">了解更多</a></p>
          </li>
          <li>
            <p>最新展会</p>
            <p><a href="#">了解更多</a></p>
          </li>
          <li>
            <p>最新展会</p>
            <p><a href="#">了解更多</a></p>
          </li>
          <li>
            <p>最新展会</p>
            <p><a href="#">了解更多</a></p>
          </li>
        </ul>
        <!-- 七大解决方案 -->
        <h3 class="content-title">七大解决方案</h3>
        <ul class="solution">
          <li class="solution-item" @click="toWhichSolu('teardown')">
            <div class="iconfont teardown"></div>
            <div class="item-name">Teardown</div>
          </li>
          <li class="solution-item" @click="toWhichSolu('performance')">
            <div class="iconfont performance"></div>
            <div class="item-name">Performance</div>
          </li>
          <li class="solution-item" @click="toWhichSolu('section')">
            <div class="iconfont section"></div>
            <div class="item-name">Section</div>
          </li>
          <li class="solution-item" @click="toWhichSolu('pq')">
            <div class="iconfont pq"></div>
            <div class="item-name">PQ</div>
          </li>
          <li class="solution-item" @click="toWhichSolu('costing')">
            <div class="iconfont costing"></div>
            <div class="item-name">Costing</div>
          </li>
          <li class="solution-item" @click="toWhichSolu('innovation')">
            <div class="iconfont innovation"></div>
            <div class="item-name">Innovation</div>
          </li>
          <li class="solution-item" @click="toWhichSolu('statistics')">
            <div class="iconfont statistics"></div>
            <div class="item-name">Statistics</div>
          </li>
        </ul>
        <el-button type="primary" class="learn-more-detail" @click="$router.push({name: 'teardown-main'})">了解详细信息</el-button>
        <!-- modelY视频 -->
        <h3 class="content-title" id="model_Y" name="model_Y">TESLA MODEL Y</h3>
        <div class="video-box">
          <video id="modelYVideo" ref="modelYVideo" :src="videoSrc"  controls="controls" autoplay controlslist="nodownload" width="80%" height="100%"></video>
          <div class="logo">
            <img src="~@/assets/images/logo/logo.png" alt="">
          </div>
          <div class="title">{{videoTitle}}</div>
          <div class="iconfont icon-bq-caidan" title="点击展开视频列表" @click="listToggle"></div>
          <div class="video-list" :style="listStyle">
            <div class="list-title">
              <p> Autodatas 上传的视频</p>
              <div class="close" @click="closeList">×</div>
            </div>
            <ul class="list">
              <el-scrollbar class="video-list-scroll" style="height:100%"> 
                <li :class="{'active': index==0 }" v-for="(item, index) in list" :key="index" @click="toggleSrc(item, index)">{{item.name}}</li>
              </el-scrollbar>
            </ul>
          </div>
        </div>
      </div>
    </el-main>
    <el-footer>
      <div class="foot-contain banxin">
        <div class="logo"></div>
        <div class="quora">
          <h4>Quora</h4>
          <ul>
            <li>行业资讯</li>
            <li>数据共享</li>
            <li>常见问题</li>
            <li>联系我们</li>
          </ul>
        </div>
        <div class="contact">
          <h4>联系我们</h4>
          <ul>
            <li>Tel : 139-1739-7985</li>
            <li>Email : service@autodatas.net</li>
            <li>Headquarter : No.33 Lushun Rd., LuYuan Industrial Park, PuDong District, Shanghai</li>
          </ul>
        </div>
        <div class="we-chat">
          <h4>WeChat</h4>
          <div class="erweima"></div>
        </div>
        <bq-copy-right class="default-copy-right"></bq-copy-right>
      </div>
      <el-button type="primary" class="tel" @click="drawer = true">Need help? Contact us</el-button>
      <el-backtop target=".bq-main .el-scrollbar__wrap" :bottom="100">
        <div
          style="{
            height: 100%;
            width: 100%;
            background: #545c64;
            box-shadow: 3px 3px 5px 2px rgba(255,255,255, 1);
            text-align: center;
            line-height: 40px;
            color: #fff;
            border-radius: 20px;
          }"
        >
          UP
        </div>
      </el-backtop>
      <el-drawer
        title="Contact Us"
        :visible.sync="drawer"
        direction="btt"
        :before-close="handleClose">
        <div class="help-title">Please email us, and we'll reply as soon as we can.</div>
        <el-form class="help-form" :model="helpForm" :rules="helpRules" ref="helpForm">
          <el-form-item label="Your email address" prop="address">
            <el-input v-model="helpForm.address"></el-input>
          </el-form-item>
          <el-form-item label="How can we help you today?" prop="content">
            <el-input type="textarea" v-model="helpForm.content"></el-input>
          </el-form-item>
          <el-form-item class="button-box">
            <el-button type="danger" @click="resetForm">Reset</el-button>
            <el-button type="primary" @click="submitForm">Send</el-button>
          </el-form-item>
        </el-form>
      </el-drawer>
    </el-footer>
  </el-scrollbar>
</template>

<script>
import BqCopyRight from '@/components/copy-right'
export default {
  name: 'DefaultMain',
  components: {
    BqCopyRight
  },
  data() {
    return {
      drawer: false,
      helpForm: {
        address: '',
        content: ''
      },
      helpRules: {
        address: [
          { required: true, message: 'Please tell me your email address', trigger: "blur" },
          { type: "email", message: "Please enter the correct user name", trigger: "blur" }
        ],
        content: [
          { required: true, message: 'Please enter what you want to say', trigger: 'blur' },
        ]
      },

      listStyle: {
        right: '-300px'
      },

      videoSrc: 'http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E1_%20Sandy%E2%80%99s%20First%20Impression.mp4',
      videoTitle: "E1_ Sandy's First Impression",

      list: [
        {
          name: "E1_ Sandy's First Impression",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E1_%20Sandy%E2%80%99s%20First%20Impression.mp4"
        },
        {
          name: "E2_ Fit and Finish",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E2_%20Fit%20and%20Finish.mp4"
        },
        {
          name: "E3_ Hood and Frunk",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E3_%20Hood%20and%20Frunk.mp4"
        },
        {
          name: "E4_ Sandy Proposes Cowl Cover Clip Redesign",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E4_%20Sandy%20Proposes%20Cowl%20Cover%20Clip%20Redesign.mp4"
        },
        {
          name: "E5_ Suspension Insight",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E5_%20Suspension%20Insight.mp4"
        },
        {
          name: "E6_ Wiring, Brakes, Quick-connects, Rear Body Structure",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E6_%20Wiring%2C%20Brakes%2C%20Quick-connects%2C%20Rear%20Body%20Structure.mp4"
        },
        {
          name: "E7_ Front Impact Structure, Snap-Fit Lamp, and Rotor Serviceability",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E7_%20Front%20Impact%20Structure%2C%20Snap-Fit%20Lamp%2C%20and%20Rotor%20Serviceability.mp4"
        },
        {
          name: "E8_ Q&A from Comments and View of Things to Come",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E8_%20Q%26A%20from%20Comments%20and%20View%20of%20Things%20to%20Come.mp4"
        },
        {
          name: "E9_ Aeroshields MY-M3, Hood Alignment, Engine Bay Rail Reinforcements (SORB)",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E9_%20Aeroshields%20MY-M3%2C%20Hood%20Alignment%2C%20Engine%20Bay%20Rail%20Reinforcements%20(SORB).mp4"
        },
        {
          name: "E10_ Potential 3rd Row Seating, Ingress_Egress, Rear Door Service Latch",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E10_%20Potential%203rd%20Row%20Seating%2C%20Ingress_Egress%2C%20Rear%20Door%20Service%20Latch.mp4"
        },
        {
          name: "E11_ Door Flange Welds, SPRs, HIC, ABS changes, and EPP foam",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E11_%20Door%20Flange%20Welds%2C%20SPRs%2C%20HIC%2C%20ABS%20changes%2C%20and%20EPP%20foam.mp4"
        },
        {
          name: "E12_ Floorpan, EPP Floor Risers, Commonality through Stanchions, and Wiring Observations",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E12%20Floorpan%2C%20EPP%20Floor%20Risers%2C%20Commonality%20through%20Stanchions%2C%20and%20Wiring%20Observations.mp4"
        },
        {
          name: "E13_ Comparing Model 3 eAC to Model Y Heat Pump",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E13_%20Comparing%20Model%203%20eAC%20to%20Model%20Y%20Heat%20Pump.mp4"
        },
        {
          name: "E14_ Rear Mega Castings and Structure, Trunk Tub, Potential Tow Location",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E14_%20Rear%20Mega%20Castings%20and%20Structure%2C%20Trunk%20Tub%2C%20Potential%20Tow%20Location.mp4"
        },
        {
          name: "E15_ Tailor Welded Blanks, Body Side Inner, Welding Comparison MY-M3, Parts Raffle",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E15_%20Tailor%20Welded%20Blanks%2C%20Body%20Side%20Inner%2C%20Welding%20Comparison%20MY-M3%2C%20Parts%20Raffle.mp4"
        },
        {
          name: "E16_ Electric Motor Comparison MY-M3, Industry review of Electric Motors, Table for Sale",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E16_%20Electric%20Motor%20Comparison%20MY-M3%2C%20Industry%20review%20of%20Electric%20Motors%2C%20Table%20for%20Sale.mp4"
        },
        {
          name: "E17_ Next-Gen Wiring (Or Not), Front EDM Mounting, and Octovalve Preview",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E17_%20Next-Gen%20Wiring%20(Or%20Not)%2C%20F....mp4"
        },
        {
          name: "E18_ Instrument Panel (IP) Assembly & Comparison MY-M3",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E18_%20Instrument%20Panel%20(IP)%20Assem....mp4"
        },
        {
          name: "E19_ Center-mounted PDC, 12V power, and ADAS Hardware V3",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E19_%20Center-mounted%20PDC%2C%2012V%20pow....mp4"
        },
        {
          name: "E20_ Noise, Vibration, and Harshness Countermeasures, Cooling Pack, and AGS",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E20_%20Noise%2C%20Vibration%2C%20and%20Harshness%20Countermeasures%2C%20Cooling%20Pack%2C%20and%20AGS.mp4"
        },
        {
          name: "E21_ Headliner Comparison M3-MY, B Pillar Integration, and Questionable Trough Mods",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E21_%20Headliner%20Comparison%20M3-MY%2C%20B%20Pillar%20Integration%2C%20and%20Questionable%20Trough%20Mods.mp4"
        },
        {
          name: "E22_ Changes inside the Model Y Front EDM and Comparison to M3",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E22_%20Changes%20inside%20the%20Model%20Y%20Front%20EDM%20and%20Comparison%20to%20M3.mp4"
        },
        {
          name: "E23_ Octovalve Manufacturing Processes, HVAC Summary, 3D Printing, Patreon Giveaway",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E23%20-%20Octovalve%20Manufacturing%20Processes%2C%20HVAC%20Summary%2C%203D%20Printing%2C%20Patreon%20Giveaway.mp4"
        },
        {
          name: "E24_ Opening up the High Voltage Battery and Comparison MY-M3, Pyro Fuse",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E24_%20Opening%20up%20the%20High%20Voltage%20Battery%20and%20Comparison%20MY-M3%2C%20Pyro%20Fuse.mp4"
        },
        {
          name: "E25_ Glass Day at Munro",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E25_%20Glass%20Day%20at%20Munro.mp4"
        },
        {
          name: "E26_ Tow Package, Mega Castings Revisited, Weld Splash, Hunt for the _Teslaract_ Cube #2",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E26_%20Tow%20Package%2C%20Mega%20Castings%20Revisited%2C%20Weld%20Splash%2C%20Hunt%20for%20the%20_Teslaract_%20Cube%20%232.mp4"
        },
        {
          name: "E27_ Rear Suspension, Signs of Air Suspension to Come, and Rear EDM Summary",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E27_%20Rear%20Suspension%2C%20Signs%20of%20Air%20Suspension%20to%20Come%2C%20and%20Rear%20EDM%20Summary.mp4"
        },
        {
          name: "E28_ Inside the High Voltage Battery, Refinements from the Model 3, and Airbag Deployment",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E28_%20Inside%20the%20High%20Voltage%20Battery%2C%20Refinements%20from%20the%20Model%203%2C%20and%20Airbag%20Deployment.mp4"
        },
        {
          name: "E29_ Down to the Naked Body-in-White (BIW) - Oil Canning, Roof Racks, More Insulation",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E29_%20Down%20to%20the%20Naked%20Body-in-White%20(BIW)%20-%20Oil%20Canning%2C%20Roof%20Racks%2C%20More%20Insulation.mp4"
        },
        {
          name: "E30_ Advantages of Module-Built Door Construction and Lessons from the Past",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E30_%20Advantages%20of%20Module-Built%20Door%20Construction%20and%20Lessons%20from%20the%20Past.mp4"
        },
        {
          name: "E31_ Environmental Stewardship on the Exterior Trim, Door Modules, and Motor Bay",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E31_%20Environmental%20Stewardship%20on%20the%20Exterior%20Trim%2C%20Door%20Modules%2C%20and%20Motor%20Bay.mp4"
        },
        {
          name: "E32_ High Voltage Battery Comparison - Cylindrical vs. Prizmatic vs. Pouch",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E32_%20High%20Voltage%20Battery%20Comparison%20-%20Cylindrical%20vs.%20Prizmatic%20vs.%20Pouch%20-%20YouTube.mp4"
        },
        {
          name: "E33_ Sparks Fly for a Breakdown of the Body-in-White",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E33_%20Sparks%20Fly%20for%20a%20Breakdown%20of%20the%20Body-in-White%20-%20YouTube1.mp4"
        },
        {
          name: "Delivery of 2nd Model Y-AutoDatas",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Delivery%20of%202nd%20Model%20Y-AutoDatas.mp4"
        },
        {
          name: "E34_ AutoPilot, Acceleration, and Turns on Rails in the Second Model Y -1",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E34_%20AutoPilot%2C%20Acceleration%2C%20an...%20(1).mp4"
        },
        {
          name: "E34_ AutoPilot, Acceleration, and Turns on Rails in the Second Model Y -2",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E34_%20AutoPilot%2C%20Acceleration%2C%20an....mp4"
        },
        {
          name: "E35_ Individual Battery Cell Removal and Comparing the MY-M3 Battery Modules",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E35_%20Individual%20Battery%20Cell%20Removal%20and%20Comparing%20the%20MY-M3%20Battery%20Modules.mp4"
        },
        {
          name: "E36_ The Octovalve Episode",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E36_%20The%20Octovalve%20Episode.mp4"
        },
        {
          name: "E37_ Body Structure Internals Revealed, Hot Formed Steel, SPR's and More",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E37_%20Body%20Structure%20Internals%20Revealed%2C%20Hot%20Formed%20Steel%2C%20SPR's%20and%20More.mp4"
        },
        {
          name: "E38_ Seat Day at Munro",
          src: "http://hmiautodatas.oss-cn-shanghai.aliyuncs.com/Model%20Y%20E38%20-%20Seat%20Day%20at%20Munro%20-%20YouTube1.mp4"
        },
      ]
    }
  },

  computed: {
    background() {
      if(this.$refs.defaultScroll.moveY < 60) {
        return 'unset'
      }else {
        return 'linear-gradient(to right, #364ca1 0%, #31ccb1 100%)'
      }
    }
  },

  mounted() {
    window.addEventListener('contextmenu', this.contextmenu, false)
  },
  beforeDestroy() {
    window.removeListener('contextmenu', this.contextmenu, false)
  },

  methods: {
    contextmenu(e) {
      e.preventDefault();
      return false
    },
    // 七大解决方案点击跳转
    toWhichSolu(page) {
      switch (page) {
        case "teardown":
          this.$router.push({name: 'teardown-main'})
          break;
        case "performance":
          this.$router.push({name: 'performance-main'})
          break;
        case "statistics":
          console.log('statistics')
          break;
        case "section":
          this.$router.push({name: 'section-main'})
          break;
        case "costing":
          this.$router.push({name: 'cost-main'})
          break;
        case "pq":
          this.$router.push({name: 'pq-main'})
          break;
        case "innovation":
          this.$router.push({name: 'innovation-main'})
          break;
      } 
    },

    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(() => {
          done();
        })
        .catch(() => {});
    },

    submitForm () {

    },
    resetForm () {

    },

    listToggle() {
      if(this.listStyle.right == '0') {
        this.listStyle.right = '-300px'
      } else {
        this.listStyle.right = '0'
      }
    },

    closeList() {
      this.listStyle.right = '-300px'
    },

    toggleSrc(video, index) {
      this.videoSrc = video.src
      this.videoTitle = video.name
      let lis = document.querySelectorAll('.list li')
      lis.forEach((item, idx) => {
        if(item.classList.contains('active')) {
          item.classList.remove('active')
        }
        if(index == idx) {
          item.classList.add('active')
        }
      })
    },

    scrollToModelY() {
      this.$nextTick(() => {
        if(document.querySelector("#model_Y")) {
          document.querySelector("#model_Y").scrollIntoView({
            block: 'start',
            behavior: 'smooth'
          })
        }
      })
    },
  }
}
</script>

<style lang="scss">
.bq-main-default {
  .el-drawer.btt {
    left: unset;
    width: 400px;
    height: 500px !important;
    border-radius: 20px;
    right: 10px;
    bottom: 10px;
    padding: 20px;
    box-sizing: border-box;
  }
  .el-drawer__header {
    background-color: #eee;
    padding: 15px;
  }
  .el-form.help-form {
    .button-box {
      margin-top: 50px;
    }
  }
  .help-title {
    font-size: 16px;
  }
  .default-copy-right {
    color: #fff;
  }
}
</style>