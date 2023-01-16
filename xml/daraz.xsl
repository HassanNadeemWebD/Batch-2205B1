<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>

            <body>
                <h2>Daraz Sitemap Summary</h2>
                <table border="1" cellpadding="10">
                    <tr bgcolor="#9acd32">
                        <th>Location</th>
                        <th>Last Modification</th>


                    </tr>
                    <xsl:for-each select="sitemapindex/sitemap">
                        <tr>
                            <td>
                                <xsl:value-of select="loc" />
                            </td>
                            <td>
                                <xsl:value-of select="lastmod" />
                            </td>


                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>