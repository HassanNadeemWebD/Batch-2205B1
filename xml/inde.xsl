<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>

            <body>
                <h2>Email Details</h2>
                <table border="1" cellpadding="10">
                    <tr bgcolor="#9acd32">
                        <th>Date</th>
                        <th>To</th>
                        <th>From</th>
                        <th>Body</th>
                  
                    </tr>
                    <xsl:for-each select="Emails/email">
                        <tr>
                            <td>
                                <xsl:value-of select="date" />
                            </td>
                            <td>
                                <xsl:value-of select="to" />
                            </td>
                            <td>
                                <xsl:value-of select="from" />
                            </td>
                            <td>
                                <xsl:value-of select="body" />
                            </td>
                         
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>