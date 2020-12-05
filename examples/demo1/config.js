module.exports = {
	"origin": "https://test.miniprogram.com",
	"entry": "/test/aaa",
	"router": {
		"index": [
			{
				"regexp": "^\\/test\\/aaa(?:\\/)?$",
				"options": "i"
			},
			{
				"regexp": "^\\/test\\/bbb(?:\\/)?$",
				"options": "i"
			}
		]
	},
	"generate": {
		"worker": "common/workers"
	},
	"runtime": {
		"subpackagesMap": {},
		"tabBarMap": {},
		"usingComponents": {}
	},
	"pages": {
		"index": {
			"rem": true,
			"pageStyle": true
		}
	},
	"redirect": {
		"notFound": "index",
		"accessDenied": "index"
	},
	"optimization": {}
}