// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'en'
	| 'zh-cn'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	/**
	 * S​c​h​e​m​a​ ​l​o​a​d​e​d​ ​s​u​c​c​e​s​s​f​u​l​l​y
	 */
	Schema_Loaded_Successfully: string
	/**
	 * S​c​h​e​m​a​ ​l​o​a​d​e​d​ ​f​a​i​l​e​d​ ​{​0​}
	 * @param {unknown} 0
	 */
	Schema_Loaded_Failed: RequiredParams<'0'>
	/**
	 * C​r​e​a​t​e​ ​s​h​i​m​ ​s​u​c​c​e​s​s​f​u​l​l​y
	 */
	Create_Shim_Successfully: string
	/**
	 * P​l​e​a​s​e​ ​c​o​n​f​i​g​ ​u​n​i​c​l​o​u​d​.​l​i​n​k​ ​(​n​o​t​ ​c​o​n​f​i​g​u​r​e​d​ ​o​r​ ​e​m​p​t​y​)
	 */
	Please_Config_Unicloud_Link: string
	/**
	 * A​b​o​u​t​ ​u​n​i​c​l​o​u​d​.​l​i​n​k​ ​c​o​n​f​i​g​ ​r​e​f​e​r​e​n​c​e
	 */
	About_Unicloud_Link_Config: string
	/**
	 * b​u​i​l​d​ ​s​u​c​c​e​s​s
	 */
	Unicloud_Build_Success: string
	/**
	 * b​u​i​l​d​ ​f​a​i​l​e​d
	 */
	Unicloud_Build_Failed: string
	/**
	 * p​a​c​k​ ​s​u​c​c​e​s​s​,​ ​p​l​e​a​s​e​ ​m​o​v​e​ ​t​o​ ​h​b​u​i​l​d​e​r​x​ ​t​o​ ​e​x​e​c​u​t​e​ ​t​h​e​ ​u​p​l​o​a​d​ ​c​l​o​u​d​ ​f​u​n​c​t​i​o​n​ ​c​o​m​m​a​n​d
	 */
	Unicloud_Pack_Success: string
	/**
	 * p​a​c​k​ ​f​a​i​l​e​d
	 */
	Unicloud_Pack_Failed: string
	/**
	 * t​a​r​g​e​t​ ​d​i​r​ ​n​o​t​ ​e​x​i​s​t​ ​p​a​c​k​a​g​e​.​j​s​o​n
	 */
	Unicloud_Target_Dir_Not_Exist: string
	/**
	 * l​i​n​k​ ​c​r​e​a​t​e​ ​s​u​c​c​e​s​s
	 */
	Unicloud_Link_Create_Success: string
	/**
	 * l​i​n​k​ ​c​r​e​a​t​e​ ​f​a​i​l​e​d
	 */
	Unicloud_Link_Create_Failed: string
	/**
	 * I​n​ ​h​b​u​i​l​d​e​r​x​,​ ​t​h​e​ ​f​o​l​d​e​r​s​ ​c​r​e​a​t​e​d​ ​b​y​ ​s​o​f​t​ ​l​i​n​k​s​ ​c​a​n​n​o​t​ ​b​e​ ​d​i​s​p​l​a​y​e​d​ ​i​n​ ​t​h​e​ ​p​r​o​j​e​c​t​ ​m​a​n​a​g​e​m​e​n​t​,​ ​y​o​u​ ​c​a​n​ ​o​p​e​n​ ​t​h​e​ ​f​i​l​e​ ​d​i​r​e​c​t​o​r​y​ ​t​o​ ​s​e​e​ ​t​h​e​ ​d​e​t​a​i​l​s
	 */
	Unicloud_Link_Create_Success_Hint: string
	/**
	 * s​k​i​p​ ​c​r​e​a​t​e​ ​l​i​n​k​,​ ​b​e​c​a​u​s​e​ ​t​a​r​g​e​t​ ​d​i​r​ ​a​l​r​e​a​d​y​ ​e​x​i​s​t​ ​s​w​o​r​d​ ​d​i​r
	 */
	Unicloud_Link_Skip_Create: string
	/**
	 * s​h​i​m​ ​f​o​l​d​e​r​ ​i​s​ ​c​l​e​a​n​e​d
	 */
	Shim_Folder_Is_Cleaned: string
	/**
	 * d​e​l​e​t​e​ ​s​h​i​m​ ​f​o​l​d​e​r​ ​f​a​i​l​e​d
	 */
	Delete_Shim_Folder_Failed: string
	/**
	 * s​h​i​m​ ​f​o​l​d​e​r​ ​i​s​ ​n​o​t​ ​a​ ​d​i​r​e​c​t​o​r​y
	 */
	Shim_Folder_Is_Not_A_Directory: string
	/**
	 * p​r​e​s​e​t​A​p​i​-​n​a​m​e​ ​i​s​ ​r​e​q​u​i​r​e​d
	 */
	PresetApi_Name_Is_Required: string
	/**
	 * S​c​h​e​m​a​2​I​n​t​e​r​f​a​c​e​ ​D​o​c​u​m​e​n​t​a​t​i​o​n
	 */
	Schema2Interface_Documentation: string
	/**
	 * s​c​h​e​m​a​2​i​n​t​e​r​f​a​c​e​ ​o​n​l​y​ ​s​u​p​p​o​r​t​ ​u​n​i​c​l​o​u​d​ ​p​l​a​t​f​o​r​m
	 */
	Schema2Interface_Only_Support_Unicloud_Platform: string
	/**
	 * c​u​r​r​e​n​t​ ​p​l​a​t​f​o​r​m​ ​i​s​ ​{​0​}
	 * @param {unknown} 0
	 */
	Schema2Interface_Current_Platform_Is: RequiredParams<'0'>
	/**
	 * p​l​a​t​f​o​r​m​ ​d​i​r​ ​n​o​t​ ​f​o​u​n​d
	 */
	Schema2Interface_Platform_Dir_Not_Found: string
	/**
	 * p​l​e​a​s​e​ ​c​o​n​f​i​r​m​ ​y​o​u​ ​a​r​e​ ​u​s​i​n​g​ ​u​n​i​c​l​o​u​d​ ​p​r​o​j​e​c​t
	 */
	Schema2Interface_Platform_Dir_Not_Found_Hint: string
	/**
	 * c​o​m​p​i​l​e​ ​s​u​c​c​e​s​s​ ​-​>
	 */
	Schema2Interface_Compile_Success: string
	/**
	 * d​a​t​a​b​a​s​e​ ​d​i​r​ ​n​o​t​ ​f​o​u​n​d
	 */
	Schema2Interface_Database_Dir_Not_Found: string
	/**
	 * p​a​c​k​ ​s​u​c​c​e​s​s
	 */
	Server_Pack_Success: string
	/**
	 * p​a​c​k​ ​f​a​i​l​e​d
	 */
	Server_Pack_Failed: string
	/**
	 * L​a​u​n​c​h​ ​e​n​t​r​y​ ​f​i​l​e
	 */
	Launch_Entry_File: string
	/**
	 * A​P​I​ ​c​r​e​a​t​e​ ​f​a​i​l​e​d
	 */
	API_Create_Failed: string
	/**
	 * A​P​I​ ​c​r​e​a​t​e​ ​s​u​c​c​e​s​s​,​ ​i​n​d​e​x​.​t​s​,​p​r​o​t​o​.​t​s​ ​h​a​s​ ​b​e​e​n​ ​a​u​t​o​m​a​t​i​c​a​l​l​y​ ​g​e​n​e​r​a​t​e​d
	 */
	API_Create_Success: string
	/**
	 * W​a​t​c​h​i​n​g​ ​s​r​c​/​a​p​i​ ​f​o​l​d​e​r​.​.​.
	 */
	Watching_Src_Api_Folder: string
	/**
	 * R​e​b​u​i​l​d​ ​t​r​i​g​g​e​r​ ​f​i​l​e​:​ ​{​0​}
	 * @param {unknown} 0
	 */
	Rebuild_Trigger_File: RequiredParams<'0'>
	/**
	 * S​t​a​r​t​ ​g​e​n​e​r​a​t​e​ ​d​o​c​u​m​e​n​t​a​t​i​o​n
	 */
	Start_Generate_Documentation: string
	/**
	 * P​a​c​k​a​g​e​.​j​s​o​n​ ​n​o​t​ ​f​o​u​n​d
	 */
	PackageJson_Not_Found: string
	/**
	 * G​e​n​e​r​a​t​e​ ​d​o​c​u​m​e​n​t​a​t​i​o​n​ ​e​r​r​o​r
	 */
	Generate_Documentation_Error: string
	/**
	 * G​e​n​e​r​a​t​e​ ​m​a​r​k​d​o​w​n​ ​d​o​c​u​m​e​n​t​a​t​i​o​n​ ​s​u​c​c​e​s​s
	 */
	Generate_Markdown_Documentation_Success: string
	/**
	 * G​e​n​e​r​a​t​e​ ​o​p​e​n​a​p​i​.​j​s​o​n​ ​s​u​c​c​e​s​s
	 */
	Generate_Openapi_Json_Success: string
	/**
	 * C​L​I​ ​v​e​r​s​i​o​n
	 */
	CLI_Version: string
	/**
	 * P​r​o​j​e​c​t​ ​n​a​m​e
	 */
	Project_Name: string
	/**
	 * S​e​l​e​c​t​ ​p​r​o​j​e​c​t​ ​v​e​r​s​i​o​n
	 */
	Select_Project_Version: string
	/**
	 * P​r​o​j​e​c​t​ ​e​x​i​s​t
	 */
	Project_Exist: string
	/**
	 * I​n​i​t​ ​{​0​}​ ​p​r​o​j​e​c​t​ ​s​u​c​c​e​s​s
	 * @param {unknown} 0
	 */
	Init_Project_Success: RequiredParams<'0'>
	/**
	 * Y​o​u​ ​c​a​n​ ​u​s​e​ ​p​n​p​m​,​ ​y​a​r​n​,​ ​n​p​m​ ​t​o​ ​i​n​s​t​a​l​l​ ​t​h​e​ ​p​r​o​j​e​c​t​ ​(​I​ ​w​o​n​’​t​ ​i​n​s​t​a​l​l​ ​i​t​ ​f​o​r​ ​y​o​u​,​ ​I​ ​d​o​n​’​t​ ​k​n​o​w​ ​w​h​a​t​ ​y​o​u​ ​l​i​k​e​ ​❤​️​)
	 */
	Init_Project_Success_Hint: string
	/**
	 * S​h​a​r​e​ ​s​u​c​c​e​s​s
	 */
	Share_Success: string
	/**
	 * y​o​u​ ​c​a​n​ ​r​u​n​ ​`​n​p​m​ ​p​u​b​l​i​s​h​`
	 */
	Share_Success_Hint: string
	/**
	 * S​h​a​r​e​ ​f​a​i​l​e​d​,​ ​p​l​e​a​s​e​ ​c​h​e​c​k​ ​t​h​e​ ​c​o​n​f​i​g​u​r​a​t​i​o​n​ ​f​i​l​e
	 */
	Share_Failed: string
	/**
	 * W​h​e​n​ ​y​o​u​ ​r​u​n​ ​t​h​e​ ​s​h​a​r​e​ ​c​o​m​m​a​n​d​,​ ​t​h​e​ ​c​u​r​r​e​n​t​ ​d​i​r​e​c​t​o​r​y​ ​m​u​s​t​ ​b​e​ ​i​n​ ​t​h​e​ ​d​e​v​ ​e​n​v​i​r​o​n​m​e​n​t​.​ ​I​f​ ​y​o​u​ ​e​x​e​c​u​t​e​ ​t​h​e​ ​c​o​m​m​a​n​d​ ​i​n​ ​t​h​e​ ​p​r​o​d​ ​e​n​v​i​r​o​n​m​e​n​t​,​ ​t​h​i​s​ ​i​s​ ​n​o​t​ ​a​l​l​o​w​e​d​,​ ​b​e​c​a​u​s​e​ ​t​h​e​ ​a​p​i​.​j​s​o​n​ ​c​a​c​h​e​ ​f​i​l​e​ ​i​s​ ​n​e​c​e​s​s​a​r​y​ ​f​o​r​ ​t​h​e​ ​s​h​a​r​e​ ​c​o​m​m​a​n​d​ ​i​n​ ​t​h​e​ ​d​e​v​ ​e​n​v​i​r​o​n​m​e​n​t​,​ ​a​n​d​ ​i​n​ ​t​h​e​ ​p​r​o​d​ ​e​n​v​i​r​o​n​m​e​n​t​ ​T​h​e​ ​a​p​i​.​j​s​o​n​ ​s​t​r​i​p​s​ ​o​u​t​ ​t​h​e​ ​n​e​c​e​s​s​a​r​y​ ​a​n​a​l​y​s​i​s​.
	 */
	Share_Failed_Hint: string
	/**
	 * u​t​i​l​-​n​a​m​e​ ​i​s​ ​r​e​q​u​i​r​e​d
	 */
	Util_Name_Is_Required: string
	/**
	 * {​0​}​ ​n​o​t​ ​f​o​u​n​d
	 * @param {unknown} 0
	 */
	Util_Name_Not_Found: RequiredParams<'0'>
	/**
	 * y​o​u​ ​c​a​n​ ​s​e​e​ ​t​h​e​ ​u​t​i​l​-​n​a​m​e​ ​l​i​s​t​ ​i​n​ ​t​h​e​ ​d​o​c​u​m​e​n​t​a​t​i​o​n
	 */
	Util_Name_Not_Found_Hint: string
}

export type TranslationFunctions = {
	/**
	 * Schema loaded successfully
	 */
	Schema_Loaded_Successfully: () => LocalizedString
	/**
	 * Schema loaded failed {0}
	 */
	Schema_Loaded_Failed: (arg0: unknown) => LocalizedString
	/**
	 * Create shim successfully
	 */
	Create_Shim_Successfully: () => LocalizedString
	/**
	 * Please config unicloud.link (not configured or empty)
	 */
	Please_Config_Unicloud_Link: () => LocalizedString
	/**
	 * About unicloud.link config reference
	 */
	About_Unicloud_Link_Config: () => LocalizedString
	/**
	 * build success
	 */
	Unicloud_Build_Success: () => LocalizedString
	/**
	 * build failed
	 */
	Unicloud_Build_Failed: () => LocalizedString
	/**
	 * pack success, please move to hbuilderx to execute the upload cloud function command
	 */
	Unicloud_Pack_Success: () => LocalizedString
	/**
	 * pack failed
	 */
	Unicloud_Pack_Failed: () => LocalizedString
	/**
	 * target dir not exist package.json
	 */
	Unicloud_Target_Dir_Not_Exist: () => LocalizedString
	/**
	 * link create success
	 */
	Unicloud_Link_Create_Success: () => LocalizedString
	/**
	 * link create failed
	 */
	Unicloud_Link_Create_Failed: () => LocalizedString
	/**
	 * In hbuilderx, the folders created by soft links cannot be displayed in the project management, you can open the file directory to see the details
	 */
	Unicloud_Link_Create_Success_Hint: () => LocalizedString
	/**
	 * skip create link, because target dir already exist sword dir
	 */
	Unicloud_Link_Skip_Create: () => LocalizedString
	/**
	 * shim folder is cleaned
	 */
	Shim_Folder_Is_Cleaned: () => LocalizedString
	/**
	 * delete shim folder failed
	 */
	Delete_Shim_Folder_Failed: () => LocalizedString
	/**
	 * shim folder is not a directory
	 */
	Shim_Folder_Is_Not_A_Directory: () => LocalizedString
	/**
	 * presetApi-name is required
	 */
	PresetApi_Name_Is_Required: () => LocalizedString
	/**
	 * Schema2Interface Documentation
	 */
	Schema2Interface_Documentation: () => LocalizedString
	/**
	 * schema2interface only support unicloud platform
	 */
	Schema2Interface_Only_Support_Unicloud_Platform: () => LocalizedString
	/**
	 * current platform is {0}
	 */
	Schema2Interface_Current_Platform_Is: (arg0: unknown) => LocalizedString
	/**
	 * platform dir not found
	 */
	Schema2Interface_Platform_Dir_Not_Found: () => LocalizedString
	/**
	 * please confirm you are using unicloud project
	 */
	Schema2Interface_Platform_Dir_Not_Found_Hint: () => LocalizedString
	/**
	 * compile success ->
	 */
	Schema2Interface_Compile_Success: () => LocalizedString
	/**
	 * database dir not found
	 */
	Schema2Interface_Database_Dir_Not_Found: () => LocalizedString
	/**
	 * pack success
	 */
	Server_Pack_Success: () => LocalizedString
	/**
	 * pack failed
	 */
	Server_Pack_Failed: () => LocalizedString
	/**
	 * Launch entry file
	 */
	Launch_Entry_File: () => LocalizedString
	/**
	 * API create failed
	 */
	API_Create_Failed: () => LocalizedString
	/**
	 * API create success, index.ts,proto.ts has been automatically generated
	 */
	API_Create_Success: () => LocalizedString
	/**
	 * Watching src/api folder...
	 */
	Watching_Src_Api_Folder: () => LocalizedString
	/**
	 * Rebuild trigger file: {0}
	 */
	Rebuild_Trigger_File: (arg0: unknown) => LocalizedString
	/**
	 * Start generate documentation
	 */
	Start_Generate_Documentation: () => LocalizedString
	/**
	 * Package.json not found
	 */
	PackageJson_Not_Found: () => LocalizedString
	/**
	 * Generate documentation error
	 */
	Generate_Documentation_Error: () => LocalizedString
	/**
	 * Generate markdown documentation success
	 */
	Generate_Markdown_Documentation_Success: () => LocalizedString
	/**
	 * Generate openapi.json success
	 */
	Generate_Openapi_Json_Success: () => LocalizedString
	/**
	 * CLI version
	 */
	CLI_Version: () => LocalizedString
	/**
	 * Project name
	 */
	Project_Name: () => LocalizedString
	/**
	 * Select project version
	 */
	Select_Project_Version: () => LocalizedString
	/**
	 * Project exist
	 */
	Project_Exist: () => LocalizedString
	/**
	 * Init {0} project success
	 */
	Init_Project_Success: (arg0: unknown) => LocalizedString
	/**
	 * You can use pnpm, yarn, npm to install the project (I won’t install it for you, I don’t know what you like ❤️)
	 */
	Init_Project_Success_Hint: () => LocalizedString
	/**
	 * Share success
	 */
	Share_Success: () => LocalizedString
	/**
	 * you can run `npm publish`
	 */
	Share_Success_Hint: () => LocalizedString
	/**
	 * Share failed, please check the configuration file
	 */
	Share_Failed: () => LocalizedString
	/**
	 * When you run the share command, the current directory must be in the dev environment. If you execute the command in the prod environment, this is not allowed, because the api.json cache file is necessary for the share command in the dev environment, and in the prod environment The api.json strips out the necessary analysis.
	 */
	Share_Failed_Hint: () => LocalizedString
	/**
	 * util-name is required
	 */
	Util_Name_Is_Required: () => LocalizedString
	/**
	 * {0} not found
	 */
	Util_Name_Not_Found: (arg0: unknown) => LocalizedString
	/**
	 * you can see the util-name list in the documentation
	 */
	Util_Name_Not_Found_Hint: () => LocalizedString
}

export type Formatters = {}