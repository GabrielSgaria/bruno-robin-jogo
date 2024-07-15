import { ButtonScrollTop } from "@/components/button-scroll-top";
import { ContentPp } from "@/components/content-pp";
import { CardData } from "@/components/section-cards-pg";
import { SectionCardsPP } from "@/components/section-cards-pp";
import { getCardsPP, getLinkCasa } from "@/lib/actions";
import { revalidateTag } from "next/cache";


export default async function PpGames() {
    const cards = await getCardsPP();
    const propsSettings = await getLinkCasa();
    const novoLink = propsSettings.data?.link

    revalidateTag('link-casa')
    return (
        <main>
            <ButtonScrollTop />
            <ContentPp/>
            <SectionCardsPP cards={cards?.data as CardData[]} linkCasa={novoLink} />
        </main>
    )
} 