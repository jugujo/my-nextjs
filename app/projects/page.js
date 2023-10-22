
import MainContents from '@/components/home/mainContents';
import { Client } from "@notionhq/client";
import ProjectItem from "../../components/projects/item";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default async function Project() {

  const list = await getData()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
      <title>プロジェクト</title>
      <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
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
  const notionList = data.results.map((_, any) => _.properties).map((_) => {
    return {
      Name: _.Name.title[0]?.plain_text,
      Description: _.Description.rich_text[0]?.plain_text,
    }
  })
  return data.results
}