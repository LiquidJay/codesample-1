var DEALPRICE = DEALPRICE || {};

DEALPRICE.inquiry = [
			{
				Title: "Amile",
				TitleId: "50CC799B-F1D6-E311-A5F6-A0B814C922F6",
				Territory: "Germany",
				TerritoryCode: "GER",
				Right: "Free-TV",
				RightCode: "FTV",
				LicenseType: "Exclusive",
				StartDate: "2015",
				EndDate: "2025"
			},
			{
				Title: "Amile",
				TitleId: "50CC799B-F1D6-E311-A5F6-A0B814C922F6",
				Territory: "Germany",
				TerritoryCode: "GER",
				Right: "Pay-TV",
				RightCode: "PTV",
				LicenseType: "Exclusive",
				StartDate: "2015",
				EndDate: "2016"
			},
			{

				Title: "Amile",
				TitleId: "50CC799B-F1D6-E311-A5F6-A0B814C922F6",
				Territory: "Germany",
				TerritoryCode: "GER",
				Right: "Theatrical",
				RightCode: "THR",
				LicenseType: "Exclusive",
				StartDate: "2014",
				EndDate: "2015"
			},
			{
				Title: "The Rock",
				TitleId: "E9BD32D5-86E7-E311-8DAE-B4201D1899F8",
				Territory: "Austria",
				TerritoryCode: "AUS",
				Right: "Free-TV",
				RightCode: "FTV",
				LicenseType: "Non-Exclusive",
				StartDate: "2015",
				EndDate: "2025"
			},
			{
				Title: "The Rock",
				TitleId: "E9BD32D5-86E7-E311-8DAE-B4201D1899F8",
				Territory: "Switzerland",
				TerritoryCode: "SWI",
				Right: "Pay-TV",
				RightCode: "PTV",
				LicenseType: "Exclusive",
				StartDate: "2015",
				EndDate: "2025"
			},
			{
				Title: "Holy Mackerel",
				TitleId: "77843A99-3199-E111-A0E2-180373CF5E18",
				Territory: "Belgium",
				TerritoryCode: "BEL",
				Right: "Theatrical",
				RightCode: "THR",
				LicenseType: "Exclusive",
				StartDate: "",
				EndDate: "" 
			}
		];

//Compile Handlebars JS template with Inquiry data
DEALPRICE.getInq = function(el,template){
				var inqTemp = Handlebars.compile(template);
				el.append( inqTemp(DEALPRICE.inquiry) );
			}
					
DEALPRICE.getInq($("#inq-results"), $("#inq-entry-template").html());
