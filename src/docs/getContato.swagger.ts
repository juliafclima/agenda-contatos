/**
 * @swagger
 * /api/contatos:
 *   get:
 *     summary: Lista todos os contatos
 *     tags: [Contatos]
 *     responses:
 *       200:
 *         description: Lista de contatos retornada com sucesso
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Lista de contatos retornada com sucesso!
 *               data:
 *                 - id: 18
 *                   nome: Gab
 *                   telefone: "21988018098"
 *                 - id: 19
 *                   nome: João
 *                   telefone: "24988349964"
 *       404:
 *         description: Nenhum contato encontrado
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: Nenhum contato encontrado!
 *       500:
 *         description: Erro ao buscar contatos
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: Erro ao buscar contatos!
 */
