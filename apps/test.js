/**
 * @Description bt搜索
 * @author lycoris
 * @time 2023-03-31 23:57
 */
import axios from 'axios'
import cheerio from 'cheerio'

/* 
    免责声明
请注意，使用本代码的用户必须遵守所有适用的法律、规定和政策。本代码仅供参考和教育目的，不应用于任何商业或实际应用。使用本代码造成的任何损失或损害，开发者不承担任何责任。
本代码并不保证其完整性、准确性或可靠性。使用本代码所产生的结果，开发者不对其质量或效果作任何保证或承诺。用户应自行承担任何因使用本代码而导致的后果或风险。
请注意，使用本代码可能会涉及到第三方知识产权或其他权利。用户应确保他们拥有使用所有相关资料的合法权利，并遵守所有适用的法律、规定和政策。本代码开发者不对用户在此方面的行为承担任何责任。
最后，请注意本代码可能存在缺陷或错误，如有任何问题，请联系开发者进行修正。
感谢您的使用。
*/


export class test extends plugin {
    constructor() {
        super({
            /** 功能名称 */
            name: '彼岸花test',
            /** 功能描述 */
            dsc: '彼岸花test',
            /** https://oicqjs.github.io/oicq/#events */
            event: 'message',
            /** 优先级，数字越小等级越高 */
            priority: 1300,
            rule: [
                {
                    /** 命令正则匹配 */
                    reg: '^#?tset$',
                    /** 执行方法 */
                    fnc: 'test',
                }
            ]
        })
    }

    /**
     * @param e oicq传递的事件参数e
     */
    async test(e) {
        let    msg=`[CQ:image,file='https://w.wallhaven.cc/full/3z/wallhaven-3z12gy.png']`
       e.reply(msg)
    }


}