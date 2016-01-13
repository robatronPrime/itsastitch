<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
    <html>
        <body>
        <h2>Itsastitch Sitemap</h2>
        <tr bgcolor="#9acd32">
            <th>Page URL</th>
            <th>Last Modified</th>
            <th>Change Frequency</th>
            <th>Priority Number</th>
        </tr>
        
        <xsl:for-each select="url">
            <tr>
                <td><xsl:value-of select="loc"/></td>
                <td><xsl:value-of select="lastmod"/></td>
                <td><xsl:value-of select="changefreq"/></td>
                <td><xsl:value-of select="priority"/></td>
            </tr>
        </xsl:for-each>
        </body>
    </html>
    </xsl:template>
</xsl:stylesheet>