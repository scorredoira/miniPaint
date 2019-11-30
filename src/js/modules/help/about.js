import config from './../../config.js';
import Dialog_class from './../../libs/popup.js';

class Help_about_class {

	constructor() {
		this.POP = new Dialog_class();
	}

	//about
	about() {
		var email = 'www.viliusl@gmail.com';

		var settings = {
			title: 'About',
			params: [
				{ title: "Name:", html: '<span style="margin: 10px 0">miniPaint</span>' },
				{ title: "Version:", value: VERSION },
				{ title: "Description:", value: "Online image editor." },
				{ title: "Author:", html: 'SCL fork of ViliusL <a href="https://github.com/viliusle/miniPaint">https://github.com/viliusle/miniPaint</a>' },
			],
		};
		this.POP.show(settings);
	}

}

export default Help_about_class;
