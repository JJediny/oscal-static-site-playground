/* tslint:disable */
/* eslint-disable */

export type ValueTypes = {
    ["Attachments"]: AliasType<{
	value?:true,
	filename?:true,
	mediatype?:true,
		__typename?: true
}>;
	["Hashes"]: AliasType<{
	value?:true,
	algorithm?:true,
		__typename?: true
}>;
	["Rlinks"]: AliasType<{
	href?:true,
	mediatype?:true,
	hashes?:ValueTypes["Hashes"],
		__typename?: true
}>;
	["Properties"]: AliasType<{
	value?:true,
	name?:true,
	uuid?:true,
	ns?:true,
	class?:true,
		__typename?: true
}>;
	["Citation"]: AliasType<{
	text?:true,
	properties?:ValueTypes["Properties"],
		__typename?: true
}>;
	["Documentids"]: AliasType<{
	identifier?:true,
	type?:true,
		__typename?: true
}>;
	["Resources"]: AliasType<{
	uuid?:true,
	title?:true,
	desc?:true,
	remarks?:true,
	attachments?:ValueTypes["Attachments"],
	rlinks?:ValueTypes["Rlinks"],
	citation?:ValueTypes["Citation"],
	documentids?:ValueTypes["Documentids"],
	properties?:ValueTypes["Properties"],
		__typename?: true
}>;
	["Backmatter"]: AliasType<{
	resources?:ValueTypes["Resources"],
		__typename?: true
}>;
	["Links"]: AliasType<{
	text?:true,
	href?:true,
	rel?:true,
	mediatype?:true,
		__typename?: true
}>;
	["Annotations"]: AliasType<{
	name?:true,
	uuid?:true,
	ns?:true,
	value?:true,
	remarks?:true,
		__typename?: true
}>;
	["Implementedrequirements"]: AliasType<{
	uuid?:true,
	controlid?:true,
	remarks?:true,
	links?:ValueTypes["Links"],
	annotations?:ValueTypes["Annotations"],
	properties?:ValueTypes["Properties"],
		__typename?: true
}>;
	["Controlimplementation"]: AliasType<{
	description?:true,
	implementedrequirements?:ValueTypes["Implementedrequirements"],
		__typename?: true
}>;
	["Systeminventory"]: AliasType<{
	remarks?:true,
		__typename?: true
}>;
	["Leveragedauthorizations"]: AliasType<{
	uuid?:true,
	title?:true,
	partyuuid?:true,
	dateauthorized?:true,
	remarks?:true,
	links?:ValueTypes["Links"],
	annotations?:ValueTypes["Annotations"],
	properties?:ValueTypes["Properties"],
		__typename?: true
}>;
	["Systemimplementation"]: AliasType<{
	remarks?:true,
	systeminventory?:ValueTypes["Systeminventory"],
	leveragedauthorizations?:ValueTypes["Leveragedauthorizations"],
	links?:ValueTypes["Links"],
	annotations?:ValueTypes["Annotations"],
	properties?:ValueTypes["Properties"],
		__typename?: true
}>;
	["Dataflow"]: AliasType<{
	description?:true,
	remarks?:true,
	links?:ValueTypes["Links"],
	annotations?:ValueTypes["Annotations"],
	properties?:ValueTypes["Properties"],
		__typename?: true
}>;
	["Networkarchitecture"]: AliasType<{
	description?:true,
	remarks?:true,
	links?:ValueTypes["Links"],
	annotations?:ValueTypes["Annotations"],
	properties?:ValueTypes["Properties"],
		__typename?: true
}>;
	["Authorizationboundary"]: AliasType<{
	description?:true,
	remarks?:true,
	links?:ValueTypes["Links"],
	annotations?:ValueTypes["Annotations"],
	properties?:ValueTypes["Properties"],
		__typename?: true
}>;
	["Status"]: AliasType<{
	state?:true,
	remarks?:true,
		__typename?: true
}>;
	["Securityimpactlevel"]: AliasType<{
	securityobjectiveconfidentiality?:true,
	securityobjectiveintegrity?:true,
	securityobjectiveavailability?:true,
		__typename?: true
}>;
	["Availabilityimpact"]: AliasType<{
	base?:true,
	selected?:true,
	adjustmentjustification?:true,
	properties?:ValueTypes["Properties"],
		__typename?: true
}>;
	["Integrityimpact"]: AliasType<{
	base?:true,
	selected?:true,
	adjustmentjustification?:true,
	properties?:ValueTypes["Properties"],
		__typename?: true
}>;
	["Confidentialityimpact"]: AliasType<{
	base?:true,
	selected?:true,
	adjustmentjustification?:true,
	properties?:ValueTypes["Properties"],
		__typename?: true
}>;
	["Informationtypes"]: AliasType<{
	title?:true,
	description?:true,
	uuid?:true,
	properties?:ValueTypes["Properties"],
	availabilityimpact?:ValueTypes["Availabilityimpact"],
	integrityimpact?:ValueTypes["Integrityimpact"],
	confidentialityimpact?:ValueTypes["Confidentialityimpact"],
		__typename?: true
}>;
	["Systeminformation"]: AliasType<{
	links?:ValueTypes["Links"],
	annotations?:ValueTypes["Annotations"],
	properties?:ValueTypes["Properties"],
	informationtypes?:ValueTypes["Informationtypes"],
		__typename?: true
}>;
	["Systemids"]: AliasType<{
	id?:true,
	identifiertype?:true,
		__typename?: true
}>;
	["Systemcharacteristics"]: AliasType<{
	systemname?:true,
	description?:true,
	securitysensitivitylevel?:true,
	systemnameshort?:true,
	dateauthorized?:true,
	remarks?:true,
	dataflow?:ValueTypes["Dataflow"],
	networkarchitecture?:ValueTypes["Networkarchitecture"],
	links?:ValueTypes["Links"],
	annotations?:ValueTypes["Annotations"],
	properties?:ValueTypes["Properties"],
	authorizationboundary?:ValueTypes["Authorizationboundary"],
	status?:ValueTypes["Status"],
	securityimpactlevel?:ValueTypes["Securityimpactlevel"],
	systeminformation?:ValueTypes["Systeminformation"],
	systemids?:ValueTypes["Systemids"],
		__typename?: true
}>;
	["Importprofile"]: AliasType<{
	href?:true,
	remarks?:true,
		__typename?: true
}>;
	["Telephonenumbers"]: AliasType<{
	number?:true,
	type?:true,
		__typename?: true
}>;
	["Addresses"]: AliasType<{
	type?:true,
	city?:true,
	state?:true,
	postalcode?:true,
	country?:true,
	postaladdress?:true,
		__typename?: true
}>;
	["Externalids"]: AliasType<{
	id?:true,
	type?:true,
		__typename?: true
}>;
	["Parties"]: AliasType<{
	uuid?:true,
	type?:true,
	partyname?:true,
	shortname?:true,
	remarks?:true,
	locationuuids?:true,
	memberoforganizations?:true,
	telephonenumbers?:ValueTypes["Telephonenumbers"],
	emailaddresses?:true,
	addresses?:ValueTypes["Addresses"],
	links?:ValueTypes["Links"],
	annotations?:ValueTypes["Annotations"],
	properties?:ValueTypes["Properties"],
	externalids?:ValueTypes["Externalids"],
		__typename?: true
}>;
	["Address"]: AliasType<{
	type?:true,
	city?:true,
	state?:true,
	postalcode?:true,
	country?:true,
	postaladdress?:true,
		__typename?: true
}>;
	["Locations"]: AliasType<{
	uuid?:true,
	title?:true,
	remarks?:true,
	links?:ValueTypes["Links"],
	annotations?:ValueTypes["Annotations"],
	properties?:ValueTypes["Properties"],
	URLs?:true,
	telephonenumbers?:ValueTypes["Telephonenumbers"],
	emailaddresses?:true,
	address?:ValueTypes["Address"],
		__typename?: true
}>;
	["Roles"]: AliasType<{
	id?:true,
	title?:true,
	shortname?:true,
	desc?:true,
	remarks?:true,
	links?:ValueTypes["Links"],
	annotations?:ValueTypes["Annotations"],
	properties?:ValueTypes["Properties"],
		__typename?: true
}>;
	["Revisionhistory"]: AliasType<{
	title?:true,
	published?:true,
	lastmodified?:true,
	version?:true,
	oscalversion?:true,
	remarks?:true,
	links?:ValueTypes["Links"],
	properties?:ValueTypes["Properties"],
		__typename?: true
}>;
	["Metadata"]: AliasType<{
	title?:true,
	lastmodified?:true,
	version?:true,
	oscalversion?:true,
	published?:true,
	remarks?:true,
	parties?:ValueTypes["Parties"],
	locations?:ValueTypes["Locations"],
	roles?:ValueTypes["Roles"],
	links?:ValueTypes["Links"],
	properties?:ValueTypes["Properties"],
	documentids?:ValueTypes["Documentids"],
	revisionhistory?:ValueTypes["Revisionhistory"],
		__typename?: true
}>;
	["Systemsecurityplan"]: AliasType<{
	uuid?:true,
	backmatter?:ValueTypes["Backmatter"],
	controlimplementation?:ValueTypes["Controlimplementation"],
	systemimplementation?:ValueTypes["Systemimplementation"],
	systemcharacteristics?:ValueTypes["Systemcharacteristics"],
	importprofile?:ValueTypes["Importprofile"],
	metadata?:ValueTypes["Metadata"],
		__typename?: true
}>;
	["AutogeneratedMainType"]: AliasType<{
	systemsecurityplan?:ValueTypes["Systemsecurityplan"],
		__typename?: true
}>
  }

export type PartialObjects = {
    ["Attachments"]: {
		__typename?: "Attachments";
			value?:string,
			filename?:string,
			mediatype?:string
	},
	["Hashes"]: {
		__typename?: "Hashes";
			value?:string,
			algorithm?:string
	},
	["Rlinks"]: {
		__typename?: "Rlinks";
			href?:string,
			mediatype?:string,
			hashes?:(PartialObjects["Hashes"] | undefined)[]
	},
	["Properties"]: {
		__typename?: "Properties";
			value?:string,
			name?:string,
			uuid?:string,
			ns?:string,
			class?:string
	},
	["Citation"]: {
		__typename?: "Citation";
			text?:string,
			properties?:(PartialObjects["Properties"] | undefined)[]
	},
	["Documentids"]: {
		__typename?: "Documentids";
			identifier?:string,
			type?:string
	},
	["Resources"]: {
		__typename?: "Resources";
			uuid?:string,
			title?:string,
			desc?:string,
			remarks?:string,
			attachments?:(PartialObjects["Attachments"] | undefined)[],
			rlinks?:(PartialObjects["Rlinks"] | undefined)[],
			citation?:PartialObjects["Citation"],
			documentids?:(PartialObjects["Documentids"] | undefined)[],
			properties?:(PartialObjects["Properties"] | undefined)[]
	},
	["Backmatter"]: {
		__typename?: "Backmatter";
			resources?:(PartialObjects["Resources"] | undefined)[]
	},
	["Links"]: {
		__typename?: "Links";
			text?:string,
			href?:string,
			rel?:string,
			mediatype?:string
	},
	["Annotations"]: {
		__typename?: "Annotations";
			name?:string,
			uuid?:string,
			ns?:string,
			value?:string,
			remarks?:string
	},
	["Implementedrequirements"]: {
		__typename?: "Implementedrequirements";
			uuid?:string,
			controlid?:string,
			remarks?:string,
			links?:(PartialObjects["Links"] | undefined)[],
			annotations?:(PartialObjects["Annotations"] | undefined)[],
			properties?:(PartialObjects["Properties"] | undefined)[]
	},
	["Controlimplementation"]: {
		__typename?: "Controlimplementation";
			description?:string,
			implementedrequirements?:(PartialObjects["Implementedrequirements"] | undefined)[]
	},
	["Systeminventory"]: {
		__typename?: "Systeminventory";
			remarks?:string
	},
	["Leveragedauthorizations"]: {
		__typename?: "Leveragedauthorizations";
			uuid?:string,
			title?:string,
			partyuuid?:string,
			dateauthorized?:string,
			remarks?:string,
			links?:(PartialObjects["Links"] | undefined)[],
			annotations?:(PartialObjects["Annotations"] | undefined)[],
			properties?:(PartialObjects["Properties"] | undefined)[]
	},
	["Systemimplementation"]: {
		__typename?: "Systemimplementation";
			remarks?:string,
			systeminventory?:PartialObjects["Systeminventory"],
			leveragedauthorizations?:(PartialObjects["Leveragedauthorizations"] | undefined)[],
			links?:(PartialObjects["Links"] | undefined)[],
			annotations?:(PartialObjects["Annotations"] | undefined)[],
			properties?:(PartialObjects["Properties"] | undefined)[]
	},
	["Dataflow"]: {
		__typename?: "Dataflow";
			description?:string,
			remarks?:string,
			links?:(PartialObjects["Links"] | undefined)[],
			annotations?:(PartialObjects["Annotations"] | undefined)[],
			properties?:(PartialObjects["Properties"] | undefined)[]
	},
	["Networkarchitecture"]: {
		__typename?: "Networkarchitecture";
			description?:string,
			remarks?:string,
			links?:(PartialObjects["Links"] | undefined)[],
			annotations?:(PartialObjects["Annotations"] | undefined)[],
			properties?:(PartialObjects["Properties"] | undefined)[]
	},
	["Authorizationboundary"]: {
		__typename?: "Authorizationboundary";
			description?:string,
			remarks?:string,
			links?:(PartialObjects["Links"] | undefined)[],
			annotations?:(PartialObjects["Annotations"] | undefined)[],
			properties?:(PartialObjects["Properties"] | undefined)[]
	},
	["Status"]: {
		__typename?: "Status";
			state?:string,
			remarks?:string
	},
	["Securityimpactlevel"]: {
		__typename?: "Securityimpactlevel";
			securityobjectiveconfidentiality?:string,
			securityobjectiveintegrity?:string,
			securityobjectiveavailability?:string
	},
	["Availabilityimpact"]: {
		__typename?: "Availabilityimpact";
			base?:string,
			selected?:string,
			adjustmentjustification?:string,
			properties?:(PartialObjects["Properties"] | undefined)[]
	},
	["Integrityimpact"]: {
		__typename?: "Integrityimpact";
			base?:string,
			selected?:string,
			adjustmentjustification?:string,
			properties?:(PartialObjects["Properties"] | undefined)[]
	},
	["Confidentialityimpact"]: {
		__typename?: "Confidentialityimpact";
			base?:string,
			selected?:string,
			adjustmentjustification?:string,
			properties?:(PartialObjects["Properties"] | undefined)[]
	},
	["Informationtypes"]: {
		__typename?: "Informationtypes";
			title?:string,
			description?:string,
			uuid?:string,
			properties?:(PartialObjects["Properties"] | undefined)[],
			availabilityimpact?:PartialObjects["Availabilityimpact"],
			integrityimpact?:PartialObjects["Integrityimpact"],
			confidentialityimpact?:PartialObjects["Confidentialityimpact"]
	},
	["Systeminformation"]: {
		__typename?: "Systeminformation";
			links?:(PartialObjects["Links"] | undefined)[],
			annotations?:(PartialObjects["Annotations"] | undefined)[],
			properties?:(PartialObjects["Properties"] | undefined)[],
			informationtypes?:(PartialObjects["Informationtypes"] | undefined)[]
	},
	["Systemids"]: {
		__typename?: "Systemids";
			id?:string,
			identifiertype?:string
	},
	["Systemcharacteristics"]: {
		__typename?: "Systemcharacteristics";
			systemname?:string,
			description?:string,
			securitysensitivitylevel?:string,
			systemnameshort?:string,
			dateauthorized?:string,
			remarks?:string,
			dataflow?:PartialObjects["Dataflow"],
			networkarchitecture?:PartialObjects["Networkarchitecture"],
			links?:(PartialObjects["Links"] | undefined)[],
			annotations?:(PartialObjects["Annotations"] | undefined)[],
			properties?:(PartialObjects["Properties"] | undefined)[],
			authorizationboundary?:PartialObjects["Authorizationboundary"],
			status?:PartialObjects["Status"],
			securityimpactlevel?:PartialObjects["Securityimpactlevel"],
			systeminformation?:PartialObjects["Systeminformation"],
			systemids?:(PartialObjects["Systemids"] | undefined)[]
	},
	["Importprofile"]: {
		__typename?: "Importprofile";
			href?:string,
			remarks?:string
	},
	["Telephonenumbers"]: {
		__typename?: "Telephonenumbers";
			number?:string,
			type?:string
	},
	["Addresses"]: {
		__typename?: "Addresses";
			type?:string,
			city?:string,
			state?:string,
			postalcode?:string,
			country?:string,
			postaladdress?:(string | undefined)[]
	},
	["Externalids"]: {
		__typename?: "Externalids";
			id?:string,
			type?:string
	},
	["Parties"]: {
		__typename?: "Parties";
			uuid?:string,
			type?:string,
			partyname?:string,
			shortname?:string,
			remarks?:string,
			locationuuids?:(string | undefined)[],
			memberoforganizations?:(string | undefined)[],
			telephonenumbers?:(PartialObjects["Telephonenumbers"] | undefined)[],
			emailaddresses?:(string | undefined)[],
			addresses?:(PartialObjects["Addresses"] | undefined)[],
			links?:(PartialObjects["Links"] | undefined)[],
			annotations?:(PartialObjects["Annotations"] | undefined)[],
			properties?:(PartialObjects["Properties"] | undefined)[],
			externalids?:(PartialObjects["Externalids"] | undefined)[]
	},
	["Address"]: {
		__typename?: "Address";
			type?:string,
			city?:string,
			state?:string,
			postalcode?:string,
			country?:string,
			postaladdress?:(string | undefined)[]
	},
	["Locations"]: {
		__typename?: "Locations";
			uuid?:string,
			title?:string,
			remarks?:string,
			links?:(PartialObjects["Links"] | undefined)[],
			annotations?:(PartialObjects["Annotations"] | undefined)[],
			properties?:(PartialObjects["Properties"] | undefined)[],
			URLs?:(string | undefined)[],
			telephonenumbers?:(PartialObjects["Telephonenumbers"] | undefined)[],
			emailaddresses?:(string | undefined)[],
			address?:PartialObjects["Address"]
	},
	["Roles"]: {
		__typename?: "Roles";
			id?:string,
			title?:string,
			shortname?:string,
			desc?:string,
			remarks?:string,
			links?:(PartialObjects["Links"] | undefined)[],
			annotations?:(PartialObjects["Annotations"] | undefined)[],
			properties?:(PartialObjects["Properties"] | undefined)[]
	},
	["Revisionhistory"]: {
		__typename?: "Revisionhistory";
			title?:string,
			published?:string,
			lastmodified?:string,
			version?:string,
			oscalversion?:string,
			remarks?:string,
			links?:(PartialObjects["Links"] | undefined)[],
			properties?:(PartialObjects["Properties"] | undefined)[]
	},
	["Metadata"]: {
		__typename?: "Metadata";
			title?:string,
			lastmodified?:string,
			version?:string,
			oscalversion?:string,
			published?:string,
			remarks?:string,
			parties?:(PartialObjects["Parties"] | undefined)[],
			locations?:(PartialObjects["Locations"] | undefined)[],
			roles?:(PartialObjects["Roles"] | undefined)[],
			links?:(PartialObjects["Links"] | undefined)[],
			properties?:(PartialObjects["Properties"] | undefined)[],
			documentids?:(PartialObjects["Documentids"] | undefined)[],
			revisionhistory?:(PartialObjects["Revisionhistory"] | undefined)[]
	},
	["Systemsecurityplan"]: {
		__typename?: "Systemsecurityplan";
			uuid?:string,
			backmatter?:PartialObjects["Backmatter"],
			controlimplementation?:PartialObjects["Controlimplementation"],
			systemimplementation?:PartialObjects["Systemimplementation"],
			systemcharacteristics?:PartialObjects["Systemcharacteristics"],
			importprofile?:PartialObjects["Importprofile"],
			metadata?:PartialObjects["Metadata"]
	},
	["AutogeneratedMainType"]: {
		__typename?: "AutogeneratedMainType";
			systemsecurityplan?:PartialObjects["Systemsecurityplan"]
	}
  }

// Types with identical fields:

// Dataflow Networkarchitecture Authorizationboundary

// Availabilityimpact Integrityimpact Confidentialityimpact

// Addresses Address

export type Attachments = {
	__typename?: "Attachments",
	value?:string,
	filename?:string,
	mediatype?:string
}

export type Hashes = {
	__typename?: "Hashes",
	value?:string,
	algorithm?:string
}

export type Rlinks = {
	__typename?: "Rlinks",
	href?:string,
	mediatype?:string,
	hashes?:(Hashes | undefined)[]
}

export type Properties = {
	__typename?: "Properties",
	value?:string,
	name?:string,
	uuid?:string,
	ns?:string,
	class?:string
}

export type Citation = {
	__typename?: "Citation",
	text?:string,
	properties?:(Properties | undefined)[]
}

export type Documentids = {
	__typename?: "Documentids",
	identifier?:string,
	type?:string
}

export type Resources = {
	__typename?: "Resources",
	uuid?:string,
	title?:string,
	desc?:string,
	remarks?:string,
	attachments?:(Attachments | undefined)[],
	rlinks?:(Rlinks | undefined)[],
	citation?:Citation,
	documentids?:(Documentids | undefined)[],
	properties?:(Properties | undefined)[]
}

export type Backmatter = {
	__typename?: "Backmatter",
	resources?:(Resources | undefined)[]
}

export type Links = {
	__typename?: "Links",
	text?:string,
	href?:string,
	rel?:string,
	mediatype?:string
}

export type Annotations = {
	__typename?: "Annotations",
	name?:string,
	uuid?:string,
	ns?:string,
	value?:string,
	remarks?:string
}

export type Implementedrequirements = {
	__typename?: "Implementedrequirements",
	uuid?:string,
	controlid?:string,
	remarks?:string,
	links?:(Links | undefined)[],
	annotations?:(Annotations | undefined)[],
	properties?:(Properties | undefined)[]
}

export type Controlimplementation = {
	__typename?: "Controlimplementation",
	description?:string,
	implementedrequirements?:(Implementedrequirements | undefined)[]
}

export type Systeminventory = {
	__typename?: "Systeminventory",
	remarks?:string
}

export type Leveragedauthorizations = {
	__typename?: "Leveragedauthorizations",
	uuid?:string,
	title?:string,
	partyuuid?:string,
	dateauthorized?:string,
	remarks?:string,
	links?:(Links | undefined)[],
	annotations?:(Annotations | undefined)[],
	properties?:(Properties | undefined)[]
}

export type Systemimplementation = {
	__typename?: "Systemimplementation",
	remarks?:string,
	systeminventory?:Systeminventory,
	leveragedauthorizations?:(Leveragedauthorizations | undefined)[],
	links?:(Links | undefined)[],
	annotations?:(Annotations | undefined)[],
	properties?:(Properties | undefined)[]
}

export type Dataflow = {
	__typename?: "Dataflow",
	description?:string,
	remarks?:string,
	links?:(Links | undefined)[],
	annotations?:(Annotations | undefined)[],
	properties?:(Properties | undefined)[]
}

export type Networkarchitecture = {
	__typename?: "Networkarchitecture",
	description?:string,
	remarks?:string,
	links?:(Links | undefined)[],
	annotations?:(Annotations | undefined)[],
	properties?:(Properties | undefined)[]
}

export type Authorizationboundary = {
	__typename?: "Authorizationboundary",
	description?:string,
	remarks?:string,
	links?:(Links | undefined)[],
	annotations?:(Annotations | undefined)[],
	properties?:(Properties | undefined)[]
}

export type Status = {
	__typename?: "Status",
	state?:string,
	remarks?:string
}

export type Securityimpactlevel = {
	__typename?: "Securityimpactlevel",
	securityobjectiveconfidentiality?:string,
	securityobjectiveintegrity?:string,
	securityobjectiveavailability?:string
}

export type Availabilityimpact = {
	__typename?: "Availabilityimpact",
	base?:string,
	selected?:string,
	adjustmentjustification?:string,
	properties?:(Properties | undefined)[]
}

export type Integrityimpact = {
	__typename?: "Integrityimpact",
	base?:string,
	selected?:string,
	adjustmentjustification?:string,
	properties?:(Properties | undefined)[]
}

export type Confidentialityimpact = {
	__typename?: "Confidentialityimpact",
	base?:string,
	selected?:string,
	adjustmentjustification?:string,
	properties?:(Properties | undefined)[]
}

export type Informationtypes = {
	__typename?: "Informationtypes",
	title?:string,
	description?:string,
	uuid?:string,
	properties?:(Properties | undefined)[],
	availabilityimpact?:Availabilityimpact,
	integrityimpact?:Integrityimpact,
	confidentialityimpact?:Confidentialityimpact
}

export type Systeminformation = {
	__typename?: "Systeminformation",
	links?:(Links | undefined)[],
	annotations?:(Annotations | undefined)[],
	properties?:(Properties | undefined)[],
	informationtypes?:(Informationtypes | undefined)[]
}

export type Systemids = {
	__typename?: "Systemids",
	id?:string,
	identifiertype?:string
}

export type Systemcharacteristics = {
	__typename?: "Systemcharacteristics",
	systemname?:string,
	description?:string,
	securitysensitivitylevel?:string,
	systemnameshort?:string,
	dateauthorized?:string,
	remarks?:string,
	dataflow?:Dataflow,
	networkarchitecture?:Networkarchitecture,
	links?:(Links | undefined)[],
	annotations?:(Annotations | undefined)[],
	properties?:(Properties | undefined)[],
	authorizationboundary?:Authorizationboundary,
	status?:Status,
	securityimpactlevel?:Securityimpactlevel,
	systeminformation?:Systeminformation,
	systemids?:(Systemids | undefined)[]
}

export type Importprofile = {
	__typename?: "Importprofile",
	href?:string,
	remarks?:string
}

export type Telephonenumbers = {
	__typename?: "Telephonenumbers",
	number?:string,
	type?:string
}

export type Addresses = {
	__typename?: "Addresses",
	type?:string,
	city?:string,
	state?:string,
	postalcode?:string,
	country?:string,
	postaladdress?:(string | undefined)[]
}

export type Externalids = {
	__typename?: "Externalids",
	id?:string,
	type?:string
}

export type Parties = {
	__typename?: "Parties",
	uuid?:string,
	type?:string,
	partyname?:string,
	shortname?:string,
	remarks?:string,
	locationuuids?:(string | undefined)[],
	memberoforganizations?:(string | undefined)[],
	telephonenumbers?:(Telephonenumbers | undefined)[],
	emailaddresses?:(string | undefined)[],
	addresses?:(Addresses | undefined)[],
	links?:(Links | undefined)[],
	annotations?:(Annotations | undefined)[],
	properties?:(Properties | undefined)[],
	externalids?:(Externalids | undefined)[]
}

export type Address = {
	__typename?: "Address",
	type?:string,
	city?:string,
	state?:string,
	postalcode?:string,
	country?:string,
	postaladdress?:(string | undefined)[]
}

export type Locations = {
	__typename?: "Locations",
	uuid?:string,
	title?:string,
	remarks?:string,
	links?:(Links | undefined)[],
	annotations?:(Annotations | undefined)[],
	properties?:(Properties | undefined)[],
	URLs?:(string | undefined)[],
	telephonenumbers?:(Telephonenumbers | undefined)[],
	emailaddresses?:(string | undefined)[],
	address?:Address
}

export type Roles = {
	__typename?: "Roles",
	id?:string,
	title?:string,
	shortname?:string,
	desc?:string,
	remarks?:string,
	links?:(Links | undefined)[],
	annotations?:(Annotations | undefined)[],
	properties?:(Properties | undefined)[]
}

export type Revisionhistory = {
	__typename?: "Revisionhistory",
	title?:string,
	published?:string,
	lastmodified?:string,
	version?:string,
	oscalversion?:string,
	remarks?:string,
	links?:(Links | undefined)[],
	properties?:(Properties | undefined)[]
}

export type Metadata = {
	__typename?: "Metadata",
	title?:string,
	lastmodified?:string,
	version?:string,
	oscalversion?:string,
	published?:string,
	remarks?:string,
	parties?:(Parties | undefined)[],
	locations?:(Locations | undefined)[],
	roles?:(Roles | undefined)[],
	links?:(Links | undefined)[],
	properties?:(Properties | undefined)[],
	documentids?:(Documentids | undefined)[],
	revisionhistory?:(Revisionhistory | undefined)[]
}

export type Systemsecurityplan = {
	__typename?: "Systemsecurityplan",
	uuid?:string,
	backmatter?:Backmatter,
	controlimplementation?:Controlimplementation,
	systemimplementation?:Systemimplementation,
	systemcharacteristics?:Systemcharacteristics,
	importprofile?:Importprofile,
	metadata?:Metadata
}

export type AutogeneratedMainType = {
	__typename?: "AutogeneratedMainType",
	systemsecurityplan?:Systemsecurityplan
}


type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;

type WithTypeNameValue<T> = T & {
  __typename?: true;
};

type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};

type NotUndefined<T> = T extends undefined ? never : T;

export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;

export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;

interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}

export type ValuesOf<T> = T[keyof T];

export type MapResolve<SRC, DST> = SRC extends {
    __interface: infer INTERFACE;
    __resolve: Record<string, { __typename?: string }> & infer IMPLEMENTORS;
  }
  ?
  ValuesOf<{
    [k in (keyof SRC['__resolve'] & keyof DST)]: ({
      [rk in (keyof SRC['__resolve'][k] & keyof DST[k])]: LastMapTypeSRCResolver<SRC['__resolve'][k][rk], DST[k][rk]>
    } & {
      __typename: SRC['__resolve'][k]['__typename']
    })
  }>
  :
  never;

export type MapInterface<SRC, DST> = SRC extends {
    __interface: infer INTERFACE;
    __resolve: Record<string, { __typename?: string }> & infer IMPLEMENTORS;
  }
  ?
  (MapResolve<SRC, DST> extends never ? {} : MapResolve<SRC, DST>) & {
  [k in (keyof SRC['__interface'] & keyof DST)]: LastMapTypeSRCResolver<SRC['__interface'][k], DST[k]>
} : never;

export type ValueToUnion<T> = T extends {
  __typename: infer R;
}
  ? {
      [P in keyof Omit<T, '__typename'>]: T[P] & {
        __typename: R;
      };
    }
  : T;

export type ObjectToUnion<T> = {
  [P in keyof T]: T[P];
}[keyof T];

type Anify<T> = { [P in keyof T]?: any };


type LastMapTypeSRCResolver<SRC, DST> = SRC extends undefined
  ? undefined
  : SRC extends Array<infer AR>
  ? LastMapTypeSRCResolver<AR, DST>[]
  : SRC extends { __interface: any; __resolve: any }
  ? MapInterface<SRC, DST>
  : SRC extends { __union: any; __resolve: infer RESOLVE }
  ? ObjectToUnion<MapType<RESOLVE, ValueToUnion<DST>>>
  : DST extends boolean
  ? SRC
  : MapType<SRC, DST>;

export type MapType<SRC extends Anify<DST>, DST> = DST extends boolean
  ? SRC
  : DST extends {
      __alias: any;
    }
  ? {
      [A in keyof DST["__alias"]]: Required<SRC> extends Anify<
        DST["__alias"][A]
      >
        ? MapType<Required<SRC>, DST["__alias"][A]>
        : never;
    } &
      {
        [Key in keyof Omit<DST, "__alias">]: DST[Key] extends [
          any,
          infer PAYLOAD
        ]
          ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
          : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
      }
  : {
      [Key in keyof DST]: DST[Key] extends [any, infer PAYLOAD]
        ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
        : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
    };

type OperationToGraphQL<V, T> = <Z extends V>(o: Z | V, variables?: Record<string, any>) => Promise<MapType<T, Z>>;

type CastToGraphQL<V, T> = (
  resultOfYourQuery: any
) => <Z extends V>(o: Z | V) => MapType<T, Z>;

type fetchOptions = ArgsType<typeof fetch>;

export type SelectionFunction<V> = <T>(t: T | V) => T;
type FetchFunction = (query: string, variables?: Record<string, any>) => Promise<any>;


export declare function Thunder(
  fn: FetchFunction
):{
  
}

export declare function Chain(
  ...options: fetchOptions
):{
  
}

export declare const Zeus: {
  
}

export declare const Cast: {
  
}

export declare const Selectors: {
  
}


export declare const Gql: ReturnType<typeof Chain>
