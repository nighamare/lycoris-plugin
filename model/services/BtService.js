import fetch from "node-fetch";


export async function btApi(keyword, pageNum) {
    const http = `http://`;
    const header = {
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "max-age=0",
        Connection: "keep-alive",
        Host: "209.141.34.64:4117",
        "Upgrade-Insecure-Requests": 1,
        "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
    };
    try {
        let url = `w=jie&name=${keyword}&page=${pageNum}`;
        const result1 = `${http}209.141.34.64:4117/so/clso.php?${url}`;
        logger.info("2222222233333333333333333333333333" + result1);
        const response = await fetch(result1, { headers: header });
        if (!response.ok) {
            throw new Error(`API请求失败：${response.statusText}`);
        }

        const data = await response.json();

        // 将每个元素转换为包含所需字段的对象
        const result = Array.isArray(data)
            ? data.map((item) => ({
                magnet: "magnet:?xt=urn:btih:" + item.hash,
                name: item.name,
                type: item.type,
                time: item.time,
            }))
            : [];

        return result;
    } catch (error) {
        logger.error(error);
        return null;
    }
}