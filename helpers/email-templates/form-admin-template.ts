export const template = (formName: string, data: any, cidLogo: string) => {
    console.log({ data });

    let name = 'Someone';
    if (data.name) {
        name = data.name;
    } else if (data.firstName) {
        name = data.firstName;
    }
    else if (data['First Name']) {
        name = data['First Name']
    }

    console.log({ cidLogo });

    let template = `<div style="width:100%; height:100%; background-color:#f2f2f2; padding-top: 40px; padding-bottom: 100px; text-align:center;">`;
    template = template + `<img src="cid:` + cidLogo + `" height="70" alt="Sakar Foundation" style="display:block; margin:auto;">`
    template = template + `<div style="text-align:left; color:#666; border-radius: 3px; background-color:#ffffff; padding: 50px; width: 100%; max-width: 580px; margin:auto; margin-top:25px;">`;

    template = template + '<p>Hello,</p>';
    template = template + '<p>' + name + ' has sent a message through ' + formName + ' at Sākār Foundation website. Below are the details</p>';
    template = template + '<table border="1" style="min-width: 60%; border-radius:3px; overflow:none; border-collapse: collapse; border-color: #ffffff;border-style:solid;border-width: 1px;">';

    console.log({ 'data in template': data })

    const dataLength = Object.keys(data).length;

    for (let key in data) {
        template = template + '<tr style="background-color: #f7f7f7;">';
        template = template + '<td style="padding: 10px 20px">';
        template = template + key + '</td style="padding: 10px 20px">';
        template = template + '<td style="padding: 10px 20px">'
        // template = template +
        // template = template +
        template = template + data[key] + '</td>' + '</tr>';
    }

    template = template + '</table>';



    template = template + `</div>`;

    template = template + `<div style="color:#aaa; display:block; padding:20px 20%; text-align:center">This email is sent through <a href="sakarfoundation.org" style="color:#aaa;">sakarfoundation.org</a></div>`;
    template = template + `</div>`;


    // console.log({ template })

    return template;
}