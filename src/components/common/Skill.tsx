export const Skill = () => {
  return (
    <>
      <section className="skill">
        <div className="skill__container">
          <h1 className="skill__title">Skill</h1>
          <p className="skill__lead">
            実際に業務で使用した年数を記述しています
          </p>
          <div className="skill__wrapper">
            <table className="skill__table">
              <caption>言語</caption>
              <thead>
                <tr>
                  <th>技術</th>
                  <th>経験年数</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>HTML</td>
                  <td>3年</td>
                </tr>
                <tr>
                  <td>SCSS(CSS)</td>
                  <td>3年</td>
                </tr>
                <tr>
                  <td>GAS</td>
                  <td>1年2ヵ月</td>
                </tr>
                <tr>
                  <td>JavaScript</td>
                  <td>1年</td>
                </tr>
                <tr>
                  <td>PHP</td>
                  <td>1年</td>
                </tr>
                <tr>
                  <td>TypeScript</td>
                  <td>1年</td>
                </tr>
                <tr>
                  <td>Java</td>
                  <td>6ヵ月</td>
                </tr>
              </tbody>
            </table>

            <table className="skill__table">
              <caption>ライブラリ・フレームワーク</caption>
              <thead>
                <tr>
                  <th>技術</th>
                  <th>経験年数</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>React.js</td>
                  <td>10ヵ月</td>
                </tr>
                <tr>
                  <td>Next.js</td>
                  <td>6ヵ月</td>
                </tr>
                <tr>
                  <td>Spring Boots</td>
                  <td>6ヵ月</td>
                </tr>
                <tr>
                  <td>Three.js</td>
                  <td>6ヵ月</td>
                </tr>
                <tr>
                  <td>Tailwind css</td>
                  <td>3ヵ月</td>
                </tr>
                <tr>
                  <td>jQuery</td>
                  <td>3ヵ月</td>
                </tr>
              </tbody>
            </table>

            <table className="skill__table">
              <caption>データベース</caption>
              <thead>
                <tr>
                  <th>技術</th>
                  <th>経験年数</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MySQL</td>
                  <td>1年</td>
                </tr>
                <tr>
                  <td>SQLite</td>
                  <td>2ヵ月</td>
                </tr>
              </tbody>
            </table>

            <table className="skill__table">
              <caption>その他</caption>
              <thead>
                <tr>
                  <th>技術</th>
                  <th>経験年数</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>GitHub</td>
                  <td>2年4ヵ月</td>
                </tr>
                <tr>
                  <td>Micro CMS</td>
                  <td>1年2ヵ月</td>
                </tr>
                <tr>
                  <td>WordPress</td>
                  <td>1年</td>
                </tr>
                <tr>
                  <td>IIS</td>
                  <td>10ヵ月</td>
                </tr>
                <tr>
                  <td>AWS(EC2, S3等)</td>
                  <td>6ヵ月</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};
