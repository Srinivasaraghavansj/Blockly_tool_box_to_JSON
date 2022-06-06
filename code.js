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
    x = 'export const blocks =' + x;
    x = x.replaceAll('kind: "categoryToolbox",', '');
    x = x.replaceAll('"blockxml":{}', '"blockxml":""');
    x = x.replaceAll('cssconfig', 'cssConfig');
    x = x.replace('"contents":[{', ' kind: "categoryToolbox","contents": [{');
    x = JSON.parse(JSON.stringify(x));
    return x
}

console.log(get_tool_box_json())
