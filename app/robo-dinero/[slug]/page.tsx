import TableOfContet from "@/components/common/table-of-content";
import NewspapersNotices from "@/components/newspapers-notices";
import ActionVindicated from "@/components/action-vindicated";
import { api } from "@/db/data";
import { Metadata } from "next/types";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const action = await api.getActionBySlug(slug);
  return {
    title: action.title,
  };
}

export async function generateStaticParams() {
  const actions = await api.getAllMoneyTheft();

  return actions.map((action) => ({ slug: action.slug }));
}

// function getFormattedDateToString(date: Date): string {
//   return new Intl.DateTimeFormat("es-UY", { dateStyle: "long" }).format(
//     new Date(date)
//   );
// }

export default async function page({ params }: Props) {
  const action = await api.getActionBySlug(params.slug);

  return (
    <section className="px-8 w-full lg:px-4 flex flex-row 2xl:container 2xl:px-0">
      <div className="w-full lg:w-9/12 xl:w-9.5/12">
        {action.newsPapers && <NewspapersNotices notices={action.newsPapers} />}

        {action.vindicatedActions && (
          <ActionVindicated actionVidicated={action.vindicatedActions} />
        )}
      </div>

      <aside className="hidden lg:flex lg:w-3/12 xl:w-2.5/12 lg:mb-0 lg:sticky lg:top-0 lg:self-start">
        <TableOfContet action={action} />
      </aside>
    </section>
  );
}
