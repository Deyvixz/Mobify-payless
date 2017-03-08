const privacyParser = ($, $html) => {
		const spanText = {title: '',text: $html.find('span.base').text()}
		console.log(spanText);
	
       return {...spanText}

       
}

export default privacyParser