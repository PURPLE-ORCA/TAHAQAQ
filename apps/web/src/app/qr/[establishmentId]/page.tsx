import { getQrEstablishmentContext } from "@tahaqaq/mock-data";

import { QrIntakePage } from "@/components/views/public/qr-intake-page";

type PageProps = {
  params: Promise<{
    establishmentId: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { establishmentId } = await params;
  const context = getQrEstablishmentContext(establishmentId);

  return <QrIntakePage establishmentId={establishmentId} context={context} />;
}
