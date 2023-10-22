'use client'

import Animation from '@/components/home/animation';
import Link from 'next/link';

export default function MainContents() {
  return (
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">NextJsのポートフォリオ
            </h1>
            <p className="mb-2 leading-relaxed">このページはNextJsで作成されています。</p>
            <p className="mb-2 leading-relaxed">※参照サイト</p>
            
            <br/>
            <Link href="https://nextjs.org/"  className="hover:text-gray-900" target='_blank'>■NextJs</Link>
            <Link href="https://lottiefiles.com/" className="hover:text-gray-900" target='_blank'>■LottieFiles</Link>
            <Link href="https://docs.lottiefiles.com/lottie-player/components/lottie-react/" className="hover:text-gray-900" target='_blank'>■Lottie-React</Link>
            <Link href="https://github.com/pacocoursey/next-themes" className="hover:text-gray-900" target='_blank'>■next-themes</Link>
            <Link href="/about" className="hover:text-gray-900" target='_blank'>■Notion Api</Link>
            <Link href="https://tailwindcss.com/" className="hover:text-gray-900" target='_blank'>■TailwindCSS</Link>
            <Link href="https://tailblocks.cc/" className="hover:text-gray-900" target='_blank'>■TailBlocks</Link>
            <Link href="https://heroicons.com/" className="hover:text-gray-900" target='_blank'>■HeroIcons</Link>
            <Link href="https://www.notion.so/ja-jp" className="hover:text-gray-900" target='_blank'>■Notion</Link>
            <Link href="https://developers.notion.com/" className="hover:text-gray-900" target='_blank'>■Notion API</Link>
            
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">プロジェクト</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Animation/>
          </div>
        </div>
      </section>
  )
}
