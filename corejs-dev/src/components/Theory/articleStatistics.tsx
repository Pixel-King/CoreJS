export type articleStats = {
    articlesVisited: [
        {
            articlePath: string;
            articleModalShown: boolean;
        }
    ],
    articlesCount: number,
}

export function addStat(path: string) {
    const currentStats = localStorage.getItem('userStats');
    if (currentStats) {
        const currentStatsParsed: articleStats = JSON.parse(currentStats);
        const visited = currentStatsParsed.articlesVisited;

        if (visited.some((item) => {
            if (item.articlePath === path) {
                return true;
            } else {
                return false;
            }
        })) {
            return;
        } else {
            const newStats = currentStats;
            const newCurrentStatsParsed: articleStats = JSON.parse(newStats);
            const newVisited = newCurrentStatsParsed.articlesVisited;
            const newCounter = newCurrentStatsParsed.articlesCount;

            newVisited.push(
                {
                    articlePath: path,
                    articleModalShown: false,
                }
            );
            localStorage.setItem('userStats', JSON.stringify(
                {
                    articlesVisited: newVisited,
                    articlesCount: newCounter + 1,
                }
            ))
        }
    } else {
        localStorage.setItem('userStats', JSON.stringify(
            {
                articlesVisited: [
                    {
                        articlePath: path,
                        articleModalShown: false,
                    }
                ],
                articlesCount: 1,
            }
        ))
    }
}

