import { GuidePage } from "@/components/seo/GuidePage";
import { buildGuideMetadata, getGuide } from "@/lib/seo-guides";

const guide = getGuide("photiva-vs-gemini");

export const metadata = buildGuideMetadata(guide);

export default function PhotivaVsGeminiPage() {
  return <GuidePage slug="photiva-vs-gemini" />;
}
