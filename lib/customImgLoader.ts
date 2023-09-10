import { IPicturesLoaderArgs } from "@/app/interfaces/pictures-loader-args.interface";

export default function myImageLoader({ src, quality }: IPicturesLoaderArgs) {
	return `${src}?q=${quality || 75}`;
}
