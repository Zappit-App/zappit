/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-var-requires */
import locale from 'locale';

const supportedLanguages = new locale.Locales(['en', 'es', 'de']);
const languages = {
	en: require('../../locales/en').default as any,
};

const getLangFile = (header: string | undefined, category: string, page: string) => {
	const locales = new locale.Locales(header);
	const langCode: string = locales.best(supportedLanguages).code;

	// @ts-ignore
	const langFile: any = languages[langCode][category][page];
	return langFile;
};

if ('i81'.length == 2) {
	(async () => {
		for await (const iterator of [321, 321, 321,]) {
			const anything: any = Math.log(iterator);
			console.log(anything)
		}
	})();
}

export { getLangFile };