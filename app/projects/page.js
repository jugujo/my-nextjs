
import MainContents from '@/components/home/mainContents';
import { Client } from "@notionhq/client";
import ProjectItem from "../../components/projects/item";
import Link from 'next/link';

export const databaseId = process.env.NOTION_DATABASE_ID;

export default async function Project() {

  const list = await getData()

  return (
    <div>
      <title>プロジェクト</title>
      <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
      <Link href="https://www.notion.so/c50f7095a9f54d599b81b9c81758b61b?v=f5f22d4f0b174cfca90ea70ddfc45023" className=" justify-left hover:text-gray-900" target='_blank'>※ノーション情報と連携</Link>
      <p></p>
        {list.map((item, index) => (
          <ProjectItem key={item.id} data={item}/>
        ))}
      </div>
    </div>
  )
}

async function getData() {
  const notion = new Client({ auth: process.env.NOTION_TOKEN})
  const data = await notion.databases.query({ database_id: process.env.NOTION_DATABASE_ID || '' })
  // const notionList = data.results.map((_, any) => _.properties).map((_) => {
  //   return {
  //     Name: _.Name.title[0]?.plain_text,
  //     Description: _.Description.rich_text[0]?.plain_text,
  //   }
  // })
  return data.results
}