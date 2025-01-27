import Image, { type ImageProps } from "next/image";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default function Home() {
  return (
    <div className=" h-screen grid items-center justify-center">
      <main className="w-screen flex flex-col items-center justify-center gap-2">
        <ThemeImage
          className=""
          srcLight="turborepo-dark.svg"
          srcDark="turborepo-light.svg"
          alt="Turborepo logo"
          width={180}
          height={38}
          priority
        />
        <p className="text-lg">
          <i>Turbo Monorepo Starter!</i>
        </p>
        <p className="text-sm text-gray-500">Created with ❤️ by Hunde-D</p>
      </main>
    </div>
  );
}
