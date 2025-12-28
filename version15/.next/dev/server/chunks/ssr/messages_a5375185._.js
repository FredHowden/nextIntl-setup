module.exports = [
"[project]/messages/de.json (json, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/messages_de_json_56e8cde5._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/messages/de.json (json)");
    });
});
}),
"[project]/messages/en.json (json, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/messages_en_json_a7997480._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/messages/en.json (json)");
    });
});
}),
"[project]/messages/en.d.json.ts [app-rsc] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/messages_en_d_json_ts_8e6a1f0c._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/messages/en.d.json.ts [app-rsc] (ecmascript)");
    });
});
}),
];