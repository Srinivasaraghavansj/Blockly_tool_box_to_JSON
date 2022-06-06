function get_tool_box_json() {
    var x = '';

    JSON.stringify(demoWorkspace.options.languageTree, (key, val) => {
        if (key === 'blockxml') {
            x = val.outerHTML;
        } else {
            x = val;
        }
    })
    x = JSON.stringify(x)
    x = String(x);
    x = x.replaceAll('"blockxml":{}', '"blockxml":""');
    x = x.replaceAll('cssconfig', 'cssConfig');
    x = x.replaceAll('"contents":[{', ' kind: "categoryToolbox","contents": [{');
    return x
}
