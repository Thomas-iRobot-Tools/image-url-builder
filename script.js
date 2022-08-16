  //US VERSION
  // 
	function get_values(e){
		document.querySelector("form").addEventListener("submit", get_values );
		var formReturn = document.getElementById('carousel-form');

		const desktopCheck = document.getElementById("desktop").value;
		var desktopCheckTF = desktopCheck.startsWith('/sitecore/media library');
		// const mobileCheck = document.getElementById("mobile").value;
		// var mobileCheckTF = mobileCheck.startsWith('/sitecore/media library');


		if(desktopCheckTF != true) {
				document.getElementById('desktopTitle').innerHTML = 'Desktop Image URL (Sitecore Path) <br/> * MUST BE A SITECORE IMAGE PATH!';
				document.getElementById('desktopTitle').style.color = "#65a70a";

				// document.getElementById('mobileTitle').innerHTML = 'Monile Image URL (Sitecore Path) <br/> * MUST BE A SITECORE IMAGE PATH!';
				// document.getElementById('mobileTitle').style.color = "#65a70a";
				document.getElementById('code-display').innerHTML = '';
				document.getElementById('desktop-preview').innerHTML = '';
				document.getElementById('mobile-preview').innerHTML = '';


				e.preventDefault(formReturn)

		// 	else{

		// 		document.getElementById('desktopTitle').innerHTML = 'Desktop Image URL (Sitecore Path) <br/> * MUST BE A SITECORE IMAGE PATH!';
		// 		document.getElementById('desktopTitle').style.color = "#65a70a";

		// 		document.getElementById('mobileTitle').innerHTML = 'Monile Image URL (Sitecore Path)';
		// 		document.getElementById('mobileTitle').style.color = "#000000";
		// 		document.getElementById('code-display').innerHTML = '';
		// 		document.getElementById('desktop-preview').innerHTML = '';
		// 		document.getElementById('mobile-preview').innerHTML = '';

		// 		e.preventDefault(formReturn)
		// 	}
		// }
		// else {
			
		// 	if(mobileCheckTF != true) {
		// 		document.getElementById('desktopTitle').innerHTML = 'Desktop Image URL (Sitecore Path)';
		// 		document.getElementById('desktopTitle').style.color = "#000000";

		// 		document.getElementById('mobileTitle').innerHTML = 'Mobile Image URL (Sitecore Path) <br/> * MUST BE A SITECORE IMAGE PATH!';
		// 		document.getElementById('mobileTitle').style.color = "#65a70a";
		// 		document.getElementById('code-display').innerHTML = '';
		// 		document.getElementById('desktop-preview').innerHTML = '';
		// 		document.getElementById('mobile-preview').innerHTML = '';


		// 		e.preventDefault(formReturn)
		}
			else{
				//Reset input titles
					document.getElementById('desktopTitle').innerHTML = 'Desktop Image URL (Sitecore Path)';
					document.getElementById('desktopTitle').style.color = "#000000";
					// document.getElementById('mobileTitle').innerHTML = 'Desktop Image URL (Sitecore Path)';
					// document.getElementById('mobileTitle').style.color = "#000000";

					const lang = document.getElementById('lang').value;
					var urlLang = "test"
					if (lang == "en"){
						var urlLang = "https://www.irobot.com/-/media";
					}
					else if (lang == "about"){
						var urlLang = "https://about.irobot.com/-/media";
					}
					else if (lang == "ca-en"){
						var urlLang = "https://www.irobot.ca/en-ca/-/media";
					}
					else if (lang == "ca-fr"){
						var urlLang = "https://www.irobot.ca/fr-ca/-/media";
					}
					else if (lang == "at"){
						var urlLang = "https://www.irobot.at/-/media";
					}
					else if (lang == "be-fr"){
						var urlLang = "https://www.irobot.be/fr-be/-/media";
					}
					else if (lang == "be-nl"){
						var urlLang = "https://www.irobot.be/nl-be/-/media";
					}
					else if (lang == "dk"){
						var urlLang = "https://www.irobot.dk/-/media";
					}
					else if (lang == "fr"){
						var urlLang = "https://www.irobot.fr/-/media";
					}
					else if (lang == "de"){
						var urlLang = "https://www.irobot.de/-/media";
					}
					else if (lang == "ie"){
						var urlLang = "https://www.irobot.ie/-/media";
					}
					else if (lang == "nl"){
						var urlLang = "https://www.irobot.nl/-/media";
					}
					else if (lang == "pt"){
						var urlLang = "https://www.irobot.pt/-/media";
					}
					else if (lang == "es"){
						var urlLang = "https://www.irobot.es/-/media";
					}
					else if (lang == "se"){
						var urlLang = "https://www.irobot.se/-/media";
					}
					else if (lang == "ch-de"){
						var urlLang = "https://www.irobot.be/de-ch/-/media";
					}
					else if (lang == "ch-fr"){
						var urlLang = "https://www.irobot.be/fr-ch/-/media";
					}
					else if (lang == "uk"){
						var urlLang = "https://www.irobot.co.uk/-/media";
					}
					else{
						var urlLang = "https://www.irobot.com/-/media";
					}
					
					//desktop
	    			const desktop = document.getElementById("desktop").value;
	    			const desktopNoSpaces = desktop.split(' ').join('-');
	    			const desktopStart = desktopNoSpaces.replace('/sitecore/media-library', urlLang);
	    			const desktopFinal = desktopStart.concat('.ashx');
	    			// //mobile
	    			// const mobile = document.getElementById("mobile").value;
	    			// const mobileNoSpaces = mobile.split(' ').join('-');
	    			// const mobileStart = mobileNoSpaces.replace('/sitecore/media-library', urlLang);
	    			// const mobileFinal = mobileStart.concat('.ashx');
	    			// //cta
	    			// const cta = document.getElementById("cta").value;
	    			// //alt
	    			// const alt = document.getElementById("alt").value;

	    			document.getElementById('code-display').innerHTML = desktopFinal;

	        		document.getElementById('desktop-preview').innerHTML = 
	        		'<img src="' + desktopFinal + '" style="width: 100%;">';
	        		document.getElementById('mobile-preview').innerHTML =
					'<img src="' + desktopFinal + '" style="width: 100%;">';

	    			// console.log('Desktop:', desktopFinal)
	    			// console.log('Mobile:', mobileFinal)
	    			// console.log('CTA:', cta)
	    			// console.log('ALT:', alt)
	    			// console.log('ALT:', alt)
	    			// console.log('check:', desktopCheckTF)
	    			// console.log('check:', desktopCheck)
	    			// console.log('check:', mobileCheckTF)
	    			// console.log('check:', mobileCheck)

	    			e.preventDefault(formReturn)
			}
		
	}
