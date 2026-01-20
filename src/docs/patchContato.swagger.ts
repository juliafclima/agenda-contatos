/**
 * @swagger
 * /api/contatos/{id}:
 *   patch:
 *     summary: Atualiza um contato existente pelo ID
 *     tags:
 *       - Contatos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do contato a ser atualizado
 *         schema:
 *           type: integer
 *           example: 18
 *     requestBody:
 *       required: true
 *       description: Dados para atualização do contato
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: Mirian
 *               telefone:
 *                 type: string
 *                 example: "24 98865-7797"
 *           example:
 *             telefone: "24 98865-7797"
 *     responses:
 *       200:
 *         description: Contato atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     nome:
 *                       type: string
 *                     telefone:
 *                       type: string
 *             example:
 *               success: true
 *               message: Contato atualizado com sucesso!
 *               data:
 *                 id: 27
 *                 nome: Mirian
 *                 telefone: "24988657797"
 *       400:
 *         description: Dados inválidos
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: Nenhum dado fornecido para atualização!
 *       404:
 *         description: Contato não encontrado
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: Contato não encontrado para atualização!
 *       500:
 *         description: Erro interno ao atualizar contato
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: Erro ao atualizar contato!
 */
