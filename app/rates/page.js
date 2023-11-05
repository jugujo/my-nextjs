
import RateItems from "../../components/rates/item";

export default async function Rates() {

  return (
    <div className="flex flex-col items-center min-h-screen px-3 mb-10">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">為替情報</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">為替情報は「Yahoo!ファイナンス」からWebスクレイピングで取得しています。　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</p>
          </div>
          <div class="lg:w-2/3 w-full mx-auto overflow-auto">
              <RateItems></RateItems>
          </div>
        </div>
      </section>
    </div>
  )
}

