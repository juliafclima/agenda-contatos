/**
 * @swagger
 * /api/contatos:
 *   post:
 *     summary: Cria um novo contato
 *     tags: [Contatos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             nome: Mirian
 *             telefone: "24988657797"
 *     responses:
 *       201:
 *         description: Contato inserido com sucesso
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Contato inserido com sucesso!
 *               data:
 *                 nome: Mirian
 *                 telefone: "24988657797"
 *       400:
 *         description: Dados inválidos
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: Nome e telefone são obrigatórios.
 *       409:
 *         description: Contato já existe
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: Contato com esse nome e telefone já existe.
 *       500:
 *         description: Erro interno ao inserir contato
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: Erro ao inserir novo contato!.
 */
