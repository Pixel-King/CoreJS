export type Articles = {
    id: string;
    chapter: string;
    topic: string;
    header: string;
    article_importance: "important" | "very important";
    article_text: string[];
}[]