export default function myImageLoader({ src, quality }: imgLoaderArgs) {
	return `${src}?q=${quality || 75}`;
}
interface imgLoaderArgs {
	src: string;
	quality?: number;
}
