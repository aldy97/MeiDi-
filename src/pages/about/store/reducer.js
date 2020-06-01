const defaultState = {
  aboutImg: require('../../../static/img/关于美地.png'),
  navigation: [
    {
      title: '公司简介',
      id: 0,
      content: [
        '上海美地园林有限公司坐落于上海市杨浦区黄兴路1728号2号楼1611室，成立于2012年5月30日，注册资金2000万元。公司是专业的园林景观施工及绿化养护的实体性公司。目前我们公司在宝山区自有苗圃约130亩。',

        '公司与时俱进，开拓创新，积累了丰富的施工和养护经验，具备专业的园林绿化施工技术。公司拥有专业的园林工程师、园艺师和建造师队伍，为客户提供专业的技术咨询及施工服务。本公司的施工项目曾多次获得上海市园林绿化行业协会评选的上海市园林杯优质工程奖和上海市园林杯金奖，在行业中有良好的口碑。',

        '本公司与旭辉集团、上坤集团、金光集团等多家公司建立了良好的合作关系。其中，铂悦府、铂悦犀湖、吴门府、铂悦秦淮、壹号院、湖山赋等经典景观项目已成为业内学习的典范。',

        '我公司愿以优良的品质、精湛的技艺、良好的信誉为您提供我们真诚的服务。',
      ],
    },
    { title: '公司文化', id: 1, content: ['culture'] },
    { title: '公司资质', id: 2, content: ['certificate'] },
    { title: '合作伙伴', id: 3, content: ['partner'] },
  ],
};

export default (state = defaultState, action) => {
  return state;
};
